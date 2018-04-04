import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public selected:string;
  public isp:string;
  public choices = [
    {value:'Home'},
    {value:'Public'}
  ];
  public isps = [
    {value:'ATT'},
    {value:'T-Mobile'},
    {value:'Sprint'},
    {value:'Xfinity'}
  ];

  public color = 'primary';
  public mode = 'determinate';
  public value = 20;
  public start = false;
  constructor() { }

  ngOnInit() {
  }
  public turnOn(){
    this.mode = 'indeterminate';
    this.start = true;
  }


}
