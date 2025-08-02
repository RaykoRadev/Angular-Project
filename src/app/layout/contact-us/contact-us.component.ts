import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-contact-us',
  imports: [],
  templateUrl: './contact-us.html',
  styleUrl: './contact-us.css',
})
export class ContactUs implements AfterViewInit {
  ngAfterViewInit(): void {
    setTimeout(() => {
      requestAnimationFrame(() => {
        this.initTheMap();
      });
    }, 0);
  }

  initTheMap(): void {
    const map = L.map('map').setView([43.24314, 26.5674], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);

    L.marker([43.24314, 26.5674])
      .addTo(map)
      .bindPopup('Вие е сте тук!')
      .openPopup();

    setTimeout(() => map.invalidateSize(), 300);
  }
}
