import { AuthService } from './auth.service';
import { FakeDbService } from './fake-db.service';
import { Injectable } from '@angular/core';
import { Curso } from '../models/curso.model';

@Injectable({
  providedIn: 'root'
})
export class MatriculaService {

  constructor(
    private fakeDbService: FakeDbService,
    private authService: AuthService,
  ) { }

  verificarAlunoLogadoInscrito(idCurso: string) {
    const alunoLogado = this.authService.alunoLogado;
    const curso = this.fakeDbService.getCursoById(idCurso);

    const isAlunoInscrito = this.fakeDbService.verificarAlunoMatriculadoNoCurso(alunoLogado, curso);
    return isAlunoInscrito;
  }


  matricularAlunoLogado(curso: Curso) {
    const alunoLogado = this.authService.alunoLogado;
    if (alunoLogado) {
      this.fakeDbService.matricularAluno(alunoLogado, curso);
    }
  }

  buscarCursosDoAluno(idAluno: string) {
    const aluno  = this.fakeDbService.getAlunoById(idAluno);
    const cursosDoAluno = this.fakeDbService.buscarCursosDoAluno(aluno);

    return cursosDoAluno;
  }
}
