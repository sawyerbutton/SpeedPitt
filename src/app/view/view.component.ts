import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Marker} from './view';
import { ViewService} from './view.service'

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  public zoom: number = 12;
  public lat: number = 40.4406;
  public lng: number = -79.9959;
  public startShow: boolean = false;
  //nav bar below
  //////////////////////////////
  public areas = [
    {value:'block'},
    {value:'zipcode'},
    {value:'block area'}
  ];
  providerControl = new FormControl();
  public isps = [
    {
      name:'Residential',
      provider:[
        {value:'Consolidated'},
        {value:'windstream'},
        {value:'Version'},
        {value:'Xfinity'},
        {value:'Fios'},
      ]
    },
    {
      name:'Business',
      provider:[
        {value:'Comcast Business'},
        {value:'MegaPath'},
        {value:'Crown Castle'},
        {value:'Level3'},
        {value:'gtt'},
        {value:'DQE Communication'},
        {value:'XO Communication'},
        {value:'Full Service'},
      ]
    },
    {
      name:'Mobile',
      provider:[
        {value:'AT&T'},
        {value:'cricket'},
        {value:'Sprint'},
        {value:'T-Mobile'}
      ]
    },
  ];
  public ways = [
    {value:'Upload'},
    {value:'download'}
  ];
  startDate = new Date(2017, 0, 1);
  endDate = new Date().getDate();
  public mode = 'determinate';
  //////////////////////////////
  //nav bar above
  constructor(
    private viewService: ViewService,
  ){}
  // public markers:marker[] = [
  //   {
  //     download: 64.251,
  //     upload: 90.436,
  //     ip: "150.212.127.85",
  //     lat: 40.4442,
  //     lon: -79.942,
  //     isp: "University of Pittsburgh"
  //   }
  // ];

  public markers:marker[];
  ngOnInit() {
    // this.viewService.getAllData().subscribe(m=>this.markers = m);
  }

  public turnOn(){
    this.mode="indeterminate";
    this.startShow=true;
    this.viewService.getAllData().subscribe(m=>this.markers = m);
    console.log(this.markers);
  }
  /////////////////
  //map functions
  public clickedMarker(ip: string, index: number) {
    console.log(`clicked the marker: ${ip || index}`)
  }

  // public mapClicked($event: MouseEvent) {
  //   this.markers.push({
  //     lat: $event.coords.lat,
  //     lng: $event.coords.lng,
  //     draggable: true
  //   });
  // }

  public markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }
}

interface marker {
  lat: number;
  lon: number;
  ip: string;
  isp: string;
  upload:number;
  download:number;
}
