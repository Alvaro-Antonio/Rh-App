import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './candidato/cadastro/cadastro.component';
import { ConsultaComponent } from './candidato/consulta/consulta.component';



const appRoutes: Routes = [
    { path: 'home',                   component: HomeComponent },
    { path: '',                       component: HomeComponent },
    { path: 'consulta-candidato',     component: ConsultaComponent },
    { path: 'cadastro-candidato',     component: CadastroComponent },
    { path: 'cadastro-candidato/:id', component: CadastroComponent }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
