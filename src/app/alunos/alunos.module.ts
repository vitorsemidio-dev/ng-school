import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlunosRoutingModule } from './alunos-routing.module';
import { AlunosComponent } from './alunos.component';
import { AlunosDetalheComponent } from './alunos-detalhe/alunos-detalhe.component';
import { AlunosFormComponent } from './alunos-form/alunos-form.component';
import { AlunosService } from './alunos.service';


@NgModule({
  declarations: [AlunosComponent, AlunosDetalheComponent, AlunosFormComponent],
  imports: [
    CommonModule,
    AlunosRoutingModule
  ],
  providers: [AlunosService]
})
export class AlunosModule { }
