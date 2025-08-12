import { AfterViewInit, Component } from '@angular/core';
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

  customIcon = L.icon({
    iconUrl: '/marker-icon-2x.png',
    iconRetinaUrl: '/marker-icon-2x.png',
    shadowUrl: '/marker-shadow.png',

    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  initTheMap(): void {
    const map = L.map('map').setView([43.24314, 26.5674], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);

    L.marker([43.24314, 26.5674], { icon: this.customIcon })
      .addTo(map)
      .bindPopup('Ние е сме тук!')
      .openPopup();

    setTimeout(() => map.invalidateSize(), 300);
  }
}
