import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Test} from './test';
import { TestService} from './test.service';

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

  public color = 'primary';
  public mode = 'determinate';
  // public value = 20;
  // public start = false;
  public testResult :Test;
  public resultShow = false;
  public spinnerStart = false;

  constructor(
    private testService: TestService,
    public test: Test
  ) { }

  ngOnInit() {
    // this.turnOn();
  }
  public turnOn(){
    this.mode = 'indeterminate';
    this.spinnerStart = true;
    this.resultShow = false;
    this.testSpeed();
  }

  public async testSpeed(){
    await this.testService.addData(this.test).subscribe(testR=>{
      this.testResult = testR;
      this.spinnerStart = false;
      this.mode = 'determinate';
      this.showResult();
    });

  }

  public showResult(){
    this.resultShow = true;
  }



}
