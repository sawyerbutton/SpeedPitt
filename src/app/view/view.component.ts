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
  public paths = [
    {
      lat:40.4369,
      lng:-79.8577
    },
    {
      lat:40.4347,
      lng:-79.9612
    },
    {
      lat:40.4975,
      lng:-80.0603
    },
    // {
    //   lat:40.3761,
    //   lng:-79.9696
    // },
    // {
    //   lat:40.4379,
    //   lng:-79.9556
    // },
    // {
    //   lat:40.4909,
    //   lng:-80.0144
    // },
    // {
    //   lat:40.4568,
    //   lng:-80.0563
    // },
    // {
    //   lat:40.4332,
    //   lng:-80.0172
    // },
    // {
    //   lat:40.4444,
    //   lng:-79.9418
    // },
    // {
    //   lat:40.4584,
    //   lon:-80.0222
    // },
    // {
    //   lat:40.4410,
    //   lng:-79.9604
    // },
    // {
    //   lat:40.4354,
    //   lng:-79.9913,
    // },
    // {
    //   lat:40.4789,
    //   lng:-79.9208
    // },
    // {
    //   lat:40.4293,
    //   lng:-79.9724
    // },
    // {
    //   lat:40.4404,
    //   lng:-79.9836,
    // },
    // {
    //   lat:40.5230,
    //   lng:-79.8633
    // },
    // {
    //   lat:40.4475,
    //   lng:-79.9934
    // },
    // {
    //   lat:40.4327,
    //   lng:-79.9249
    // },
    // {
    //   lat:40.3901,
    //   lng:-80.0144
    // },
    // {
    //   lat:40.4219,
    //   lng:-79.8885
    // },
    // {
    //   lat:40.4511,
    //   lng:-79.9333
    // },
    // {
    //   lat:40.4608,
    //   lng:-79.9285
    // },
    // {
    //   lat:40.4392,
    //   lng:-80.0035
    // },
    // {
    //   lat:40.4409,
    //   lng:-80.0009
    // },
    // {
    //   lat:40.4790,
    //   lng:-79.9213
    // },
    // {
    //   lat:40.4889,
    //   lng:-79.8901
    // },
    // {
    //   lat:40.4400,
    //   lng:-79.9800
    // },
    // {
    //   lat:40.4393,
    //   lng:-80.0013
    // },
    // {
    //   lat:40.4400,
    //   lng:-79.9600
    // },
    // {
    //   lat:40.4422,
    //   lng:-79.9949
    // },
    // {
    //   lat:40.4394,
    //   lng:-79.9951
    // },
    // {
    //   lat:40.4511,
    //   lng:-80.1805
    // },
    // {
    //   lat:40.5068,
    //   lng:-79.9081
    // },
    // {
    //   lat:40.4672,
    //   lng:-79.9445
    // },
    // {
    //   lat:40.3930,
    //   lng:-80.0479
    // },
    // {
    //   lat:40.4509,
    //   lng:-79.9025
    // },
    // {
    //   lat:40.4721,
    //   lng:-79.9137
    // },
    // {
    //   lat:40.4828,
    //   lng:-80.0367
    // },
    // {
    //   lat:40.4089,
    //   lng:-80.1149
    // },
    // {
    //   lat:40.4418,
    //   lng:-80.0870
    // },
    // {
    //   lat:40.4223,
    //   lng:-80.0367
    // },
    // {
    //   lat:40.3381,
    //   lng:-79.9790
    // },
    // {
    //   lat:40.4034,
    //   lng:-79.9361
    // },
    // {
    //   lat:40.4083,
    //   lng:-79.9920
    // },
    // {
    //   lat:40.4005,
    //   lng:-79.9025
    // },
    // {
    //   lat:40.3676,
    //   lng:-80.0172
    // },
    // {
    //   lat:40.4543,
    //   lng:-80.0283
    // },
    // {
    //   lat:40.4424,
    //   lng:-79.9532
    // },
    // {
    //   lat:40.4396,
    //   lng:-79.9950
    // },
    // {
    //   lat:40.4377,
    //   lng:-80.0025
    // },
    // {
    //   lat:40.4696,
    //   lng:-80.0389
    // }

  ]

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
