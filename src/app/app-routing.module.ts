import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopBarComponent } from './top-bar/top-bar.component';
import { RankingComponent } from './ranking/ranking.component';
import { RegistrarPontuacaoComponent } from './registrar-pontuacao/registrar-pontuacao.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [
  { path: '', component: TopBarComponent, children:[  
    { path: 'sidebar', component: SidebarComponent, 
        children: [
        { path: 'ranking', component: RankingComponent },
        { path: 'registrar-pontuacao', component: RegistrarPontuacaoComponent }
  ]}
]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
