import { Component } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.less']
})
export class RankingComponent {

  constructor(private service: ApiserviceService) {}

  ngOnInit(): void {
    this.refreshRanking();
  }

  Pontuacoes: any = [];

  refreshRanking() {
    this.service.obterRanking().subscribe(data => {
      this.Pontuacoes = data;
    });
  }
}
