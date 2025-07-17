import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
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
import { CardInt } from '../../shared/utils/interfaces';
import { CardService } from '../../core/services/card-service/card.service';

@Component({
  selector: 'app-create-card',
  imports: [
    ReactiveFormsModule,
    MatInput,
    MatError,
    MatFormField,
    MatLabel,
    CommonModule,
  ],
  templateUrl: './create-card.html',
  styleUrl: './create-card.css',
})
export class CreateCard {
  constructor(
    private uploadService: UploadPhoto,
    private cardService: CardService
  ) {}
  createCard = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl(''),
  });

  selectedFileName: string | null = null;
  imageUrl: string | null = null;

  uploadPhoto(e: Event) {
    console.log(e.target);
    // let imgString = '';
    const input = e.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      // console.log(file);

      this.selectedFileName = file.name;
      // console.log(this.selectedFileName);

      const link = this.uploadService.uploadPhotoFn(file).subscribe({
        next: (url) => {
          this.imageUrl = url;
          console.log('url is: ', url);
        },

        error: (err) => {
          console.error('ImgBB upload faild', err);
        },
      });
    }
  }

  handlerSubmit() {
    if (this.createCard.valid) {
      const formData: CardInt = this.createCard.value as CardInt;
      console.log('formdata is:', formData);

      const authorName = getUserData()?.username;
      const authorID = getUserData()?._id;

      const allData: CardInt = {
        ...formData,
        imageUrl: this.imageUrl!,
        author: authorID!,
        // authorID: authorID!,
      };

      console.log('all Data:', allData);

      this.cardService.create(allData).subscribe({
        next: () => {
          this.createCard.reset();
          //todo redirect to the same category
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
