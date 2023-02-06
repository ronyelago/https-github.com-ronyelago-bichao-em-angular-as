import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NovaPontuacaoModel } from './models/NovaPontuacaoModel';
import { Jogador } from './models/jogador';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  readonly apiUrl = 'https://localhost:7174/api/Partida/'

  constructor(private http: HttpClient) { }

  obterRanking(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + 'GerarRanking') 
  }

  obterDetalheJogador(jogadorId: string): Observable<Jogador> {
    return this.http.get<Jogador>(this.apiUrl + 'ObterJogador/' + jogadorId);
  }

  registrarPontuacao(viewModel: NovaPontuacaoModel): Observable<NovaPontuacaoModel> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
      return this.http.post<NovaPontuacaoModel>(this.apiUrl + 'RegistrarPontuacao', viewModel, httpOptions)
  }
}
