import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavComponent } from './components/nav/nav.component';

// Técnicos Imports
import { TecnicoCraeteComponent } from './components/tecnico/tecnico-craete/tecnico-craete.component';
import { TecnicoDeleteComponent } from './components/tecnico/tecnico-delete/tecnico-delete.component';
import { TecnicoListComponent } from './components/tecnico/tecnico-list/tecnico-list.component';
import { TecnicoUpdateComponent } from './components/tecnico/tecnico-update/tecnico-update.component';

// Clientes Imports
import { ClienteCraeteComponent } from './components/cliente/cliente-craete/cliente-craete.component';
import { ClienteDeleteComponent } from './components/cliente/cliente-delete/cliente-delete.component';
import { ClienteListComponent } from './components/cliente/cliente-list/cliente-list.component';
import { ClienteUpdateComponent } from './components/cliente/cliente-update/cliente-update.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: NavComponent, canActivate: [AuthGuard], children: [
    { path: 'home', component: HomeComponent },

    { path: 'tecnicos', component: TecnicoListComponent },
    { path: 'tecnicos/create', component: TecnicoCraeteComponent },
    { path: 'tecnicos/update/:id', component: TecnicoUpdateComponent },
    { path: 'tecnicos/delete/:id', component: TecnicoDeleteComponent },

    { path: 'clientes', component: ClienteListComponent },
    { path: 'clientes/create', component: ClienteCraeteComponent },
    { path: 'clientes/update/:id', component: ClienteUpdateComponent },
    { path: 'clientes/delete/:id', component: ClienteDeleteComponent }
  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
