import { Component, signal } from '@angular/core';
import {
  FormControl,
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
import { UploadPhoto } from '../../core/services/uploadPhoto-service/uploadphoto.service';
import { getUserData } from '../../shared/utils/userData';
import { CardInitForm, CardIntFull } from '../../shared/utils/interfaces';
import { CardService } from '../../core/services/card-service/card.service';
import { MatOption, MatSelect } from '@angular/material/select';
import { Router } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ErrorService } from '../../core/services/error-service/error.service';

@Component({
  selector: 'app-create-card',
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
  ],
  templateUrl: './create-card.html',
  styleUrl: './create-card.css',
})
export class CreateCard {
  constructor(
    private uploadService: UploadPhoto,
    private cardService: CardService,
    private router: Router,
    private errorService: ErrorService
  ) {}
  createCard = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    description: new FormControl('', Validators.minLength(6)),
    category: new FormControl(null, Validators.required),
  });

  selectedFileName: string | null = null;
  imageUrl: string | null = null;
  categoriesArr: string[] = [
    'Рожден ден',
    'Сватбени',
    'Юбилейни',
    'Бебешки',
    'Кръщене',
    'Кутии',
  ];

  isUploading = signal<boolean>(false);

  uploadPhoto(e: Event) {
    console.log(e.target);
    const input = e.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      // console.log(file);

      this.selectedFileName = file.name;
      // console.log(this.selectedFileName);

      this.isUploading.set(true);

      const link = this.uploadService.uploadPhotoFn(file).subscribe({
        next: (url) => {
          this.imageUrl = url;
          console.log('url is: ', url);
          this.isUploading.set(false);
        },

        error: (err) => {
          console.error('ImgBB upload faild', err);
          this.isUploading.set(false);
        },
      });
    }
  }

  handlerSubmit() {
    if (!this.imageUrl) {
      console.warn('Image not uploaded yet. Please wait or upload an image.');
      return;
    }

    if (this.createCard.valid) {
      const formData: CardInitForm = this.createCard.value as CardInitForm;
      // console.log('formdata is:', formData);

      const userData = getUserData();

      if (!userData || !userData._id) {
        console.error('User data missing, aborting request');
        return;
      }

      const allData: CardIntFull = {
        ...formData,
        imageUrl: this.imageUrl,
        author: userData._id,
      };

      // console.log('all Data:', allData);

      this.cardService.create(allData).subscribe({
        next: (data) => {
          // console.log('Responce:', data, typeof data);

          this.createCard.reset();
          this.selectedFileName = null;
          this.imageUrl = null;
          this.router.navigate(['category', data.category]);
        },
        error: (err) => {
          console.error('Creating card faild', err);
          this.errorService.setError(
            err.error.message ||
              'Неуспешно създаване на картичка! Моля пробвайте отново!'
          );
        },
      });
    } else {
      console.warn('Form is invalid');
    }
  }
}
