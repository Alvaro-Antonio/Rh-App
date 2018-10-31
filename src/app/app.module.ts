import { CadastroCargoComponent } from './cargo/cadastro/cadastro.component';
import { ConsultaCargoComponent } from './cargo/consulta/consulta.component';
import { CargoService } from './services/cargo.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ConfigService } from './services/config.service';
import { CandidatoService } from './services/candidato.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { CadastroCandidatoComponent } from './candidato/cadastro/cadastro.component';
import { HomeComponent } from './home/home.component';
import { ConsultaCandidatoComponent } from './candidato/consulta/consulta.component';
import { MenuComponent } from './menu/menu.component';
import { routing } from './ app.routes';
import { CadastroFuncionarioComponent } from './funcionario/cadastro-funcionario/cadastro-funcionario.component';
import { ConsultaFuncionarioComponent } from './funcionario/consulta-funcionario/consulta-funcionario.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CadastroCandidatoComponent,
    ConsultaCandidatoComponent,
    CadastroCargoComponent,
    ConsultaCargoComponent,
    MenuComponent,
    CadastroFuncionarioComponent,
    ConsultaFuncionarioComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing
  ],
  providers: [ConfigService, CandidatoService, CargoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
