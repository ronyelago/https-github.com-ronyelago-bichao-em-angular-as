import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RankingComponent } from './ranking/ranking.component';
import { RegistrarPontuacaoComponent } from './registrar-pontuacao/registrar-pontuacao.component';
import { EstatisticasJogadorComponent } from './estatisticas-jogador/estatisticas-jogador.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RankingComponent,
    RegistrarPontuacaoComponent,
    EstatisticasJogadorComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
