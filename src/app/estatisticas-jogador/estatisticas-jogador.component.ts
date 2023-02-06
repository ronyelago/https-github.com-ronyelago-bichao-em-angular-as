import { Component, Input } from '@angular/core';
import { Jogador } from '../models/jogador';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-estatisticas-jogador',
  templateUrl: './estatisticas-jogador.component.html',
  styleUrls: ['./estatisticas-jogador.component.less']
})
export class EstatisticasJogadorComponent {

  constructor(private service: ApiserviceService) { }

  ngOnInit(): void {
    this.obterDetalhesJogador(this.JogadorId);
  }

  @Input() JogadorId: string;
  Jogador: Jogador = {
    Id: '',
    PartidasJogadas: 0,
    PontuacaoMedia: 0,
    MaiorPontuacao: 0,
    MenorPontuacao: 0,
    RecordesPessoais: 0,
    JogaDesde: undefined
  };

  obterDetalhesJogador(jogadorId: string) {
    this.service.obterDetalheJogador(jogadorId).subscribe(data => {
      console.log(data);
      this.Jogador.Id = data['id'];
      this.Jogador.PontuacaoMedia = data['pontuacaoMedia'];
      this.Jogador.MaiorPontuacao = data['maiorPontuacao'];
      this.Jogador.MenorPontuacao = data['menorPontuacao'];
      this.Jogador.PartidasJogadas = data['partidasJogadas'];
      this.Jogador.RecordesPessoais = data['recordesPessoais'];
    });
  }
}
