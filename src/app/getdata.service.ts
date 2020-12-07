import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ValuesModel } from './Models/ValuesModel';


@Injectable({
  providedIn: 'root'
})
export class GetdataService {
  constructor(private http: HttpClient) { }

  public API = 'https://localhost:44313/Values';

  getData(id: number): Observable<ValuesModel> {
    return this.http.get<ValuesModel>(`${this.API}/${id}`);
  }

}
