import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ConfigService } from './services/config.service';
import { CandidatoService } from './services/candidato.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { CadastroComponent } from './candidato/cadastro/cadastro.component';
import { HomeComponent } from './home/home.component';
import { ConsultaComponent } from './candidato/consulta/consulta.component';
import { MenuComponent } from './menu/menu.component';
import { routing } from './ app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CadastroComponent,
    ConsultaComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing
  ],
  providers: [ConfigService, CandidatoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
