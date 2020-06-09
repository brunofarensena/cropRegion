import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface Farm {
  id: number;
  id_user: number;
  name: string;
  latitude: string;
  longitude: string;
  city: string;
  state: string;
  country: string;
  crops: [
    {
      id: number;
      name: string;
    }
  ];
}

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {
  readonly ROOT_URL =
    'https://gravitee-api-gateway.sa-stage.yaradigitallabs.io/';

  farms: Observable<any>;

  lat = -21.4689409;
  lng = -44.1022293;

  constructor(private httpClient: HttpClient) {}

  clickedMarker(name: string) {
    console.log(`clicked the marker: ${name}`);
  }

  ngOnInit() {
    const headers = new HttpHeaders().set(
      'X-Gravitee-Api-Key',
      'key'
    );

    this.farms = this.httpClient.get(this.ROOT_URL + '/farm', { headers });
  }
}
