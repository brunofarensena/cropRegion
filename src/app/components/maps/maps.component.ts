import { Component, OnInit } from '@angular/core';

interface Marker {
  lat: number;
  lng: number;
  label?: string;
  description: string;
  draggable: boolean;
}


@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {

  lat = 51.673858;
  lng = 7.815982;

  markers: Marker[] = [
    {
      lat: 51.673858,
      lng: 7.815982,
      label: 'A',
      description: 'argentina',
      draggable: false
    },
    {
      lat: 51.373858,
      lng: 7.215982,
      label: 'B',
      description: 'brasil',
      draggable: true
    },
    {
      lat: 51.723858,
      lng: 7.895982,
      label: 'C',
      description: 'olaaa',
      draggable: true
    }
  ];


  constructor() { }

  clickedMarker(label: string, index: number, description: string) {
    console.log(`clicked the marker: ${label || index || description}`);
  }
  ngOnInit() {
  }

}
