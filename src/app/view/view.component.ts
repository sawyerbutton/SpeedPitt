import { Component, OnInit } from '@angular/core';

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
  public isps = [
    {value:'ATT'},
    {value:'T-Mobile'},
    {value:'Sprint'},
    {value:'Xfinity'}
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
