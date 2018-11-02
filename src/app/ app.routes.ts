import { ConsultaTalentosComponent } from './bancoDeTalentos/consulta-talentos/consulta-talentos.component';
import { ConsultaTreinamentoComponent } from './treinamento/consulta-treinamento/consulta-treinamento.component';
import { CadastroTreinamentoComponent } from './treinamento/cadastro-treinamento/cadastro-treinamento.component';
import { CadastroFuncionarioComponent } from './funcionario/cadastro-funcionario/cadastro-funcionario.component';
import { ModuleWithProviders, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CadastroCandidatoComponent } from './candidato/cadastro/cadastro.component';
import { ConsultaCandidatoComponent } from './candidato/consulta/consulta.component';
import { ConsultaCargoComponent } from './cargo/consulta/consulta.component';
import { CadastroCargoComponent } from './cargo/cadastro/cadastro.component';
import { ConsultaFuncionarioComponent } from './funcionario/consulta-funcionario/consulta-funcionario.component';
import { CadastraTalentosComponent } from './bancoDeTalentos/cadastra-talentos/cadastra-talentos.component';
import { ConsultaSelecaoComponent } from './selecao/consulta-selecao/consulta-selecao.component';
import { CadastroSelecaoComponent } from './selecao/cadastro-selecao/cadastro-selecao.component';



const appRoutes: Routes = [
    { path: 'home',                   component: HomeComponent },
    { path: '',                       component: HomeComponent },
    { path: 'consulta-candidato',     component: ConsultaCandidatoComponent },
    { path: 'cadastro-candidato',     component: CadastroCandidatoComponent },
    { path: 'cadastro-candidato/:id', component: CadastroCandidatoComponent },
    { path: 'consulta-cargo',     component: ConsultaCargoComponent },
    { path: 'cadastro-cargo',     component: CadastroCargoComponent },
    { path: 'cadastro-cargo/:id', component: CadastroCargoComponent },
    { path: 'consulta-funcionario',     component: ConsultaFuncionarioComponent },
    { path: 'cadastro-funcionario',     component: CadastroFuncionarioComponent },
    { path: 'cadastro-funcionario/:id', component: CadastroFuncionarioComponent },
    { path: 'cadastro-treinamento', component: CadastroTreinamentoComponent},
    { path: 'cadastro-treinamento/:id', component: CadastroTreinamentoComponent},
    { path: 'consulta-treinamento', component: ConsultaTreinamentoComponent},
    { path: 'cadastro-bancodeTalentos', component: CadastraTalentosComponent},
    { path: 'cadastro-bancodeTalentos/:id', component: CadastraTalentosComponent},
    { path: 'consulta-bancodeTalentos', component: ConsultaTalentosComponent},
    { path: 'cadastro-selecao', component: CadastroSelecaoComponent},
    { path: 'cadastro-selecao/:id', component: CadastroSelecaoComponent},
    { path: 'consulta-selecao', component: ConsultaSelecaoComponent},

];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
