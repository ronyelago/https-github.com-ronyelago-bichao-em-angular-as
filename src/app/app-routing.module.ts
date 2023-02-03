import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RankingComponent } from './ranking/ranking.component';
import { RegistrarPontuacaoComponent } from './registrar-pontuacao/registrar-pontuacao.component';

const routes: Routes = [
  { path: 'ranking', component: RankingComponent },
  { path: 'registrar-pontuacao', component: RegistrarPontuacaoComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
