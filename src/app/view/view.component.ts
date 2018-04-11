import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  public lat: number = 40.4406;
  public lng: number = -79.9959;
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
  constructor() { }

  ngOnInit() {
  }

  public turnOn(){
    this.mode="indeterminate";
  }
}
