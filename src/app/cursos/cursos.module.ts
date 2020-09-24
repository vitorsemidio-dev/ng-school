import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosComponent } from './cursos.component';
import { CursosDetalheComponent } from './cursos-detalhe/cursos-detalhe.component';
import { CursosService } from './cursos.service';
import { CursosGuard } from './cursos.guard';


@NgModule({
  declarations: [CursosComponent, CursosDetalheComponent],
  imports: [
    CommonModule,
    CursosRoutingModule
  ],
  providers: [
    CursosService,
    CursosGuard,
  ]
})
export class CursosModule { }
