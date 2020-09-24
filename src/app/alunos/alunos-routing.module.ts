import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlunosFormComponent } from './alunos-form/alunos-form.component';
import { AlunosDetalheComponent } from './alunos-detalhe/alunos-detalhe.component';
import { AlunosComponent } from './alunos.component';
import { AlunosGuard } from './alunos.guard';

const routes: Routes = [
  { path: '', component: AlunosComponent, children: [
    { path: 'novo', component: AlunosFormComponent, canDeactivate: [AlunosGuard], },
    { path: ':id', component: AlunosDetalheComponent },
    { path: ':id/editar', component: AlunosFormComponent, canDeactivate: [AlunosGuard], },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlunosRoutingModule { }
