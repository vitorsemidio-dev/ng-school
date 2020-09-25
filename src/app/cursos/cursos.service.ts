import { MatriculaService } from './../services/matricula.service';
import { Injectable } from '@angular/core';

import { Curso } from '../models/curso.model';
import { FakeDbService } from './../services/fake-db.service';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private cursos: Curso[];

  constructor(
    private fakeDbService: FakeDbService,
    private matriculaService: MatriculaService,
  ) { }

  getCursos() {
    const cursos = this.fakeDbService.getCursos();
    return cursos;
  }

  getCurso(id: string) {
    const cursoEncontrado = this.fakeDbService.getCursoById(id);
    return cursoEncontrado;
  }

  matricularAluno(curso: Curso) {
    this.matriculaService.matricularAlunoLogado(curso);
  }

}
