import { SelecaoService } from 'src/app/services/selecao.service.';
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
import { FuncionarioService } from './services/funcionario.service';
import { CadastroTreinamentoComponent } from './treinamento/cadastro-treinamento/cadastro-treinamento.component';
import { ConsultaTreinamentoComponent } from './treinamento/consulta-treinamento/consulta-treinamento.component';
import { ConsultaTalentosComponent } from './bancoDeTalentos/consulta-talentos/consulta-talentos.component';
import { CadastraTalentosComponent } from './bancoDeTalentos/cadastra-talentos/cadastra-talentos.component';
import { ConsultaSelecaoComponent } from './selecao/consulta-selecao/consulta-selecao.component';
import { AdmitirCandidatoComponent } from './selecao/admitir-candidato/admitir-candidato.component';
import { CadastroSelecaoComponent } from './selecao/cadastro-selecao/cadastro-selecao.component';
import { BancoDeTalentosService } from './services/BancoDeTalentos.Service';
import { TreinamentoService } from './services/treinamento.service';

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
    ConsultaFuncionarioComponent,
    CadastroFuncionarioComponent,
    ConsultaFuncionarioComponent,
    CadastroTreinamentoComponent,
    ConsultaTreinamentoComponent,
    ConsultaTalentosComponent,
    CadastraTalentosComponent,
    ConsultaSelecaoComponent,
    AdmitirCandidatoComponent,
    CadastroSelecaoComponent,
    ConsultaTreinamentoComponent,
    CadastraTalentosComponent,
    CadastroSelecaoComponent,
    ConsultaSelecaoComponent,
    AdmitirCandidatoComponent

  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing
  ],
  providers: [ConfigService, CandidatoService, CargoService, FuncionarioService, TreinamentoService,
    BancoDeTalentosService, SelecaoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
