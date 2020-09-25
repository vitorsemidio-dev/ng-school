import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';
import { Curso } from '../models/curso.model';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {
  cursos: Curso[];

  constructor(
    private cursosService: CursosService,
  ) { }

  ngOnInit(): void {
    this.carregarCursos();
  }

  carregarCursos() {
    this.cursos = this.cursosService.getCursos();
  }

}
