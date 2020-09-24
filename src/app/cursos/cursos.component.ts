import { CursosService } from './cursos.service';
import { Curso } from './curso.model';
import { Component, OnInit } from '@angular/core';

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
