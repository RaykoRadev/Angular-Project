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
  constructor(private uploadService: UploadPhoto) {}
  createCard = new FormGroup({
    title: new FormControl('', [Validators.required]),
    textarea: new FormControl(''),
    // imgUrl: new FormControl('', [Validators.required]),
  });

  selectedFileName: string | null = null;

  uploadPhoto(e: Event) {
    console.log(e.target);
    let imgString = '';
    const input = e.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      // console.log(file);

      this.selectedFileName = file.name;
      // console.log(this.selectedFileName);

      const link = this.uploadService.uploadPhotoFn(file).subscribe({
        next: (url) => {
          imgString = url;
          console.log('url is: ', url);
        },
        error: (err) => {
          console.error('ImgBB upload faild', err);
        },
      });
    }
  }
  handlerSubmit() {}
}
