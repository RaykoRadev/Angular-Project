import { Injectable } from '@angular/core';
import { GeoLocation } from '../../../shared/utils/interfaces';

@Injectable({
  providedIn: 'root',
})
export class Geolocation {
  getUserLocation(): Promise<GeoLocation> {
    return new Promise((res, reject) => {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            res({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
          },
          (err) => {
            console.error('Geolocation err', err);
            res({ lat: 43.24314, lng: 26.5674 });
          }
        );
      } else {
        console.warn('Geolocation not available');
        res({ lat: 43.24314, lng: 26.5674 });
      }
    });
  }
}
