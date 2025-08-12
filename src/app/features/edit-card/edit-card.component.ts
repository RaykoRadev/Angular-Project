import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CardService } from '../../core/services/card-service/card.service';
import {
  CardInitForm,
  CardIntFull,
  CardResp,
} from '../../shared/utils/interfaces';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  MatError,
  MatFormField,
  MatInput,
  MatLabel,
} from '@angular/material/input';
import { MatOption, MatSelect } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { UploadPhoto } from '../../core/services/uploadPhoto-service/uploadphoto.service';
import { getUserData } from '../../shared/utils/userData';
import { TextFieldModule } from '@angular/cdk/text-field';
import { ErrorService } from '../../core/services/error-service/error.service';

@Component({
  selector: 'app-edit-card',
  imports: [
    ReactiveFormsModule,
    MatInput,
    MatError,
    MatFormField,
    MatLabel,
    MatOption,
    MatSelect,
    FormsModule,
    CommonModule,
    MatProgressBarModule,
    TextFieldModule,
  ],
  templateUrl: './edit-card.html',
  styleUrl: './edit-card.css',
})
export class EditCard implements OnInit {
  cardId: string = '';
  cardInfo: CardResp | null = null;

  private formBuilder = inject(FormBuilder);
  isUploading = signal<boolean>(false);
  hideLink = signal<boolean>(false);
  cardForm: FormGroup;

  isPhotoChanged = false;
  isImageUrlLocked = true;
  imageUrl: string | null = null;
  selectedFileName: string | null = null;
  categoriesArr: string[] = [
    'Рожден ден',
    'Сватбени',
    'Юбилейни',
    'Бебешки',
    'Кръщене',
    'Кутии',
  ];
  allData: CardIntFull | CardInitForm | null = null;

  constructor(
    private activeRouting: ActivatedRoute,
    private cardService: CardService,
    private uploadService: UploadPhoto,
    private router: Router,
    private errorService: ErrorService
  ) {
    this.cardForm = this.formBuilder.group({
      title: [
        'this.cardInfo?.title',
        [Validators.required, Validators.minLength(3)],
      ],
      description: ['', Validators.minLength(6)],
      imageUrl: [''],
      category: ['', Validators.required],
    });

    this.activeRouting.params.subscribe({
      next: (url) => {
        // console.log('url: ', url['card._id']);
        this.cardId = url['card._id'];

        this.cardService.getOneById(this.cardId).subscribe({
          next: (card) => {
            // console.log('card info:', card);
            this.cardInfo = card;
            // console.log(this.cardInfo);

            this.cardForm.patchValue({
              title: this.cardInfo?.title,
              description: this.cardInfo?.description,
              imageUrl: this.cardInfo?.imageUrl,
              category: this.cardInfo?.category,
            });
          },
          error: (err) => {
            console.error('Card info loading faild', err);
            this.errorService.setError(
              err.error.message ||
                'Неуспешно създаване на картичка! Моля пробвайте отново!'
            );
          },
        });
      },
    });
  }

  ngOnInit(): void {}

  uploadPhoto(e: Event) {
    // console.log(e.target);
    const input = e.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      // console.log(file);

      this.selectedFileName = file.name;
      // console.log(this.selectedFileName);

      this.isUploading.set(true);
      this.hideLink.set(true);

      const link = this.uploadService.uploadPhotoFn(file).subscribe({
        next: (url) => {
          this.imageUrl = url;
          // console.log('url is: ', url);
          this.isUploading.set(false);
          this.isPhotoChanged = true;
        },

        error: (err) => {
          console.error('ImgBB upload faild', err);
          this.isUploading.set(false);
        },
      });
    }
  }

  handlerSubmit() {
    if (this.cardForm.valid) {
      const formData: CardInitForm = this.cardForm.value as CardInitForm;
      // console.log('formdata is:', formData);
      // console.log('formdata descrp. is:', formData.description);

      const userData = getUserData();

      if (!userData || !userData._id) {
        console.error('User data missing, aborting request');
        return;
      }

      if (this.isPhotoChanged) {
        if (!this.imageUrl) {
          console.warn(
            'Image not uploaded yet. Please wait or upload an image.'
          );
          return;
        }
        this.allData = {
          ...formData,
          imageUrl: this.imageUrl,
          author: userData._id,
        };
      } else {
        this.allData = formData;
      }
      // console.log('all Data:', this.allData);

      this.cardService.edit(this.cardInfo!._id, this.allData).subscribe({
        next: (data) => {
          // console.log('Responce:', data);

          this.cardForm.reset();
          this.selectedFileName = null;
          this.imageUrl = null;

          this.router.navigate(['details', this.cardInfo?._id]);
        },
        error: (err) => {
          console.error('Creating card faild', err);
        },
      });
    } else {
      console.warn('Form is invalid');
    }
  }
}
