import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursosDetalheComponent } from './cursos-detalhe/cursos-detalhe.component';
import { CursosGuard } from './cursos.guard';
import { CursosComponent } from './cursos.component';

const routes: Routes = [
  { path: '', component: CursosComponent, children: [
    { path: ':id', component: CursosDetalheComponent, canActivate: [CursosGuard] },
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
