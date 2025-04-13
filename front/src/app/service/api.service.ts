import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import ProcessamentoModel from '../../model/ProcessamentoModel';
import ProcessamentoDto from '../../model/ProcessamentoDto';
import ProcessamentoResponse from '../../model/ProcessamentoResponse';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url = 'http://localhost:8000/';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  getNumbers(): Observable<ProcessamentoModel[]> {
    return this.http.get<ProcessamentoModel[]>(this.url);
  }

  getNumberById(id: number): Observable<ProcessamentoModel> {
    return this.http.get<ProcessamentoModel>(this.url + 'status/' +id);
  }

  sendNumbers(dto: ProcessamentoDto): Observable<ProcessamentoResponse> {
    return this.http.post<ProcessamentoResponse>(this.url + 'processar', dto, this.httpOptions);
  }
}
