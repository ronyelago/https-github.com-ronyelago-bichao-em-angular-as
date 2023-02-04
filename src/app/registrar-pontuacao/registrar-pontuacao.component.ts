import { Component, Input } from '@angular/core';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { ApiserviceService } from '../apiservice.service';
import { NovaPontuacaoModel } from '../models/NovaPontuacaoModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-pontuacao',
  templateUrl: './registrar-pontuacao.component.html',
  styleUrls: ['./registrar-pontuacao.component.less'],
})
export class RegistrarPontuacaoComponent {

  constructor(private service: ApiserviceService, private router: Router) {}

  @Input() novaPontuacao: NovaPontuacaoModel = new NovaPontuacaoModel;
  @Input() selectedDate!: NgbDate;

  registrarPontuacao() {
      this.novaPontuacao.DataPartida = new Date(this.selectedDate.year, this.selectedDate.month -1, this.selectedDate.day);
      this.service.registrarPontuacao(this.novaPontuacao).subscribe(res => {
      this.router.navigate(['/ranking']);
    })
  }
}
