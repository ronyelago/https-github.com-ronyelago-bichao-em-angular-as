import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  readonly apiUrl = 'https://localhost:7174/api/Partida/'

  constructor(private http: HttpClient) { }

  obterRanking(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + 'GerarRanking') 
  }
}
