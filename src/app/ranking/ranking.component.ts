import { Component } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.less']
})
export class RankingComponent {

  constructor(private service: ApiserviceService, private router: Router) {}

  ngOnInit(): void {
    this.refreshRanking();
  }

  Pontuacoes: any = [];

  refreshRanking() {
    this.service.obterRanking().subscribe(data => {
      this.Pontuacoes = data;
    });
  }

  detalharJogador(jogadorId: string)
  {
      console.log(jogadorId);
  }
}
