import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';

const routes: Routes = [
  { path: '', component: NaoEncontradoComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'alunos',
    canActivate: [AuthGuard],
    loadChildren: () => import('src/app/alunos/alunos.module').then(m => m.AlunosModule)
  },
  {
    path: 'cursos',
    canActivate: [AuthGuard],
    loadChildren: () => import('src/app/cursos/cursos.module').then(m => m.CursosModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
