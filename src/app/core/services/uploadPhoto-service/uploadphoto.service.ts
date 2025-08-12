import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  API_imgBB_KEY,
  IMAGE_UPLOAD,
} from '../../../shared/cosntants/constants';
import { map, Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UploadPhoto {
  private apiKey = API_imgBB_KEY;
  private url = IMAGE_UPLOAD;

  constructor(private http: HttpClient) {}

  uploadPhotoFn(img: File): Observable<string> {
    return this.fileToBase64(img).pipe(
      switchMap((base64Image: string) => {
        const formData = new FormData();
        formData.append('image', base64Image);

        return this.http.post<any>(this.url + this.apiKey, formData);
      }),
      map((res) => res.data.url)
    );
  }

  //* transfer the image into a string
  private fileToBase64(file: File): Observable<string> {
    return new Observable<string>((observer) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const result = reader.result as string;
        const base64 = result.split(',')[1];
        observer.next(base64);
        observer.complete();
      };
      reader.onerror = (err) => observer.error(err);
    });
  }
}
