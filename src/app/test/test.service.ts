import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Test} from './test';
import { Injectable } from '@angular/core';


declare var jquery:any;
declare var $ :any;

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class TestService {
  constructor(
    private http: HttpClient,
  ){}

  private url = 'http://localhost:3000/test';

  addData(test: Test): Observable<Test>{
    const msg =  this.http.post<Test>(this.url,test,httpOptions);
    //setTimeout(console.log(msg),10000);
    return msg;
  }

  public async ipRelated(){
    let lon,lat,isp,ip;
    await $.getJSON('https://ipinfo.io', function(data){
      // console.log(data);
      ip = data.ip;
      lon = data.loc;
      lat = data.loc;
      isp = data.org;
    })
    return await {lon,lat,isp,ip};
  }

  public async apiTest(){
    await $.getJSON('https://www.broadbandmap.gov/broadbandmap/speedtest/pittsburgh?format=json',function (data) {
      console.log(data);
    })
  }
}
