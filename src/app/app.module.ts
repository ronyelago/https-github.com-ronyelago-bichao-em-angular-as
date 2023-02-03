import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RankingComponent } from './ranking/ranking.component';
import { RegistrarPontuacaoComponent } from './registrar-pontuacao/registrar-pontuacao.component';
import { EstatisticasJogadorComponent } from './estatisticas-jogador/estatisticas-jogador.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    SidebarComponent,
    RankingComponent,
    RegistrarPontuacaoComponent,
    EstatisticasJogadorComponent
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }