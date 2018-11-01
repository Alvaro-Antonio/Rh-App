import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CadastroCandidatoComponent } from './candidato/cadastro/cadastro.component';
import { ConsultaCandidatoComponent } from './candidato/consulta/consulta.component';
import { ConsultaCargoComponent } from './cargo/consulta/consulta.component';
import { CadastroCargoComponent } from './cargo/cadastro/cadastro.component';
import { ConsultaFuncionarioComponent } from './funcionario/consulta-funcionario/consulta-funcionario.component';



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
    { path: 'cadastro-funcionario',     component: ConsultaFuncionarioComponent },
    { path: 'cadastro-funcionario/:id', component: ConsultaFuncionarioComponent }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
