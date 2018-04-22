import {Component, Inject, OnInit, ɵConsole} from '@angular/core';
import {FormControl} from '@angular/forms';
import { Test} from './test';
import { TestService} from './test.service';
import * as NetworkSpeed from 'network-speed';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  public selected:string;
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
  public download:any;
  public upload:any;
  public isp:string;
  public lon:any;
  public lat:any;
  public ip:string;
  constructor(
    private testService: TestService,
    public test: Test
  ) { }

  ngOnInit() {
    // this.turnOn();
  }
  public async turnOn(){
    let uploadTemp :any;
    this.mode = 'indeterminate';
    this.spinnerStart = true;
    this.resultShow = false;
    this.download = await this.downloadSpeed();
    this.download = await this.downloadSpeed();
    this.download = Math.round(this.download);
    var temp = await this.testService.ipRelated();
    await this.checkUploadSpeed(1,(speed,average)=> {
      uploadTemp = speed/1024;
      // observer.set(uploadTemp);
      this.upload = Math.round(uploadTemp);
      this.ip = temp.ip;
      this.isp = temp.isp;
      this.lat = parseFloat(temp.lat.split(",")[0]);
      this.lon = parseFloat(temp.lon.split(",")[1]);
      let data = {download:this.download,upload:this.upload,ip:this.ip,isp:this.isp,lat:this.lat,lon:this.lon};
      console.log(data);
      this.testService.addData(data).subscribe(()=>{
        this.spinnerStart = false;
        this.mode = 'determinate';
        this.showResult();
      })
    });
    // this.testService.ipRelated(this.lon,this.lat,this.isp,this.ip);


  }

  // public async testSpeed(){
  //   await this.testService.addData(this.test).subscribe(testR=>{
  //     this.testResult = testR;
  //     this.spinnerStart = false;
  //     this.mode = 'determinate';
  //     this.showResult();
  //   });
  //
  // }

  public showResult(){
    this.resultShow = true;
  }

  public checkUploadSpeed( iterations, update ) {
    var average = 0,
      index = 0,
      timer = window.setInterval( check, 5000 ); //check every 5 seconds
    check();

    function check() {
      var xhr = new XMLHttpRequest(),
        url = '?cache=' + Math.floor( Math.random() * 10000 ), //prevent url cache
        data = getRandomString( 1 ), //1 meg POST size handled by all servers
        startTime,
        speed = 0;
      xhr.onreadystatechange = function ( event ) {
        if( xhr.readyState == 4 ) {
          speed = Math.round( 1024 / ( ( new Date().getTime() - startTime ) / 1000 ) );
          average == 0
            ? average = speed
            : average = Math.round( ( average + speed ) / 2 );
          update( speed, average );
          index++;
          if( index == iterations ) {
            window.clearInterval( timer );
          };
        };
      };
      xhr.open( 'POST', url, true );
      startTime = new Date();
      xhr.send( data );
    };

    function getRandomString( sizeInMb ) {
      var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*()_+`-=[]\{}|;':,./<>?", //random data prevents gzip effect
        iterations = sizeInMb * 1024 * 1024, //get byte count
        result = '';
      for( var index = 0; index < iterations; index++ ) {
        result += chars.charAt( Math.floor( Math.random() * chars.length ) );
      };
      return result;
    };
  }



  public downloadSpeed(){
    // const speedTest = require('speedtest-net');
    var testNetworkSpeed = new NetworkSpeed();
    async function getNetworkDownloadSpeed() {
      var baseUrl = 'http://eu.httpbin.org/stream-bytes/50000000';
      var fileSize = 500000;
      var speed = await testNetworkSpeed.checkDownloadSpeed(baseUrl, fileSize);
      // console.log(speed);
      return await helper(speed.mbps);
      // console.log((this.download));
    }
    return getNetworkDownloadSpeed();

    async function helper(speed){
      // console.log(speed);
      return await speed;
    }
  }
}
