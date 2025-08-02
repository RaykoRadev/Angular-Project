import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Geolocation } from '../../core/services/geolocation-service/geolocation.service';
import * as L from 'leaflet';
import 'leaflet/dist/images/marker-icon.png';
import 'leaflet/dist/images/marker-icon-2x.png';
import 'leaflet/dist/images/marker-shadow.png';

@Component({
  selector: 'app-contact-us',
  imports: [],
  templateUrl: './contact-us.html',
  styleUrl: './contact-us.css',
})
export class ContactUs implements AfterViewInit {
  latitude: number | null = null;
  longitude: number | null = null;

  constructor(private geoService: Geolocation) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.geoService.getUserLocation().then((location) => {
      this.latitude = location.lat;
      this.longitude = location.lng;

      const map = L.map('map').setView([this.latitude, this.longitude], 13);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
      }).addTo(map);

      const DefaultIcon = L.icon({
        iconUrl: 'assets/leaflet/marker-icon.png',
        iconRetinaUrl: 'assets/leaflet/marker-icon-2x.png',
        shadowUrl: 'assets/leaflet/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
      });

      L.Marker.prototype.options.icon = DefaultIcon;

      L.marker([this.latitude, this.longitude])
        .addTo(map)
        .bindPopup('Вие е сте тук!')
        .openPopup();

      setTimeout(() => {
        map.invalidateSize();
      }, 100);
    });
  }
}
