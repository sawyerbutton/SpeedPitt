import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Marker} from './view';
import {Injectable} from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ViewService {
  constructor(
    private http: HttpClient,
  ) {}

  private url = 'http://localhost:3000/test';

  getAllData (): Observable<Marker[]> {
    return this.http.get<Marker[]>(this.url);
  }
}
