import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { question} from './question';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class QuestionnaireService{
  constructor(
    private http: HttpClient,
  ){}

  private url = 'http://localhost:3000/questionnaire';

  // getAllData (): Observable<question[]> {
  //   return this.http.get<question[]>(this.url);
  // }

  addData(q:question) : Observable<question>{
    return this.http.post<question>(this.url,q,httpOptions);
  }
}
