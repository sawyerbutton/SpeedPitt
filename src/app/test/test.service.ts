import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Test} from './test';
import { Injectable } from '@angular/core';


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

  // getAllData (): Observable<Test[]> {
  //   return this.http.get<Test[]>(this.url);
  // }
}
