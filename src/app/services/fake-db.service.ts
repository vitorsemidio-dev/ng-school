import { Injectable } from '@angular/core';

import { MATRICULAS } from './fakes/matriculas';
import { CURSOS } from './fakes/cursos';
import { ALUNOS } from './fakes/alunos';

import { Aluno } from '../models/aluno.model';
import { Curso } from '../models/curso.model';
import { Matricula } from '../models/matricula.model';

import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root',
})
export class FakeDbService {
  private alunos: Aluno[] = ALUNOS;
  private cursos: Curso[] = CURSOS;
  private matriculas: Matricula[] = MATRICULAS;

  constructor(
    // private authService: AuthService,
  ) {}

  getAlunos() {
    return this.alunos;
  }

  getAlunoById(id: string) {
    const alunoEncontrado = this.alunos.find((aluno) => aluno.id === id);
    return alunoEncontrado;
  }

  getAlunoByEmail(email: string) {
    const alunoEncontrado = this.alunos.find((aluno) => aluno.email === email);
    return alunoEncontrado;
  }

  getCursos() {
    return this.cursos;
  }

  getCursoById(id: string) {
    const cursoEncontrado = this.cursos.find((curso) => curso.id === id);
    return cursoEncontrado;
  }

  getMatriculas() {
    return this.matriculas;
  }


  matricularAluno(aluno: Aluno, curso: Curso) {
    const alunoCheck = this.getAlunoById(aluno.id);
    if (!alunoCheck) {
      // throw new Error('Aluno não encontrado');
      return;
    }

    const cursoCheck = this.getCursoById(curso.id);
    if (!cursoCheck) {
      // throw new Error('Curso não encontrado');
      return;
    }

    const matriculaCurso = this.encontrarCursoMatriculado(curso);

    if (!matriculaCurso) {
      this.matricularPrimeiroAlunoNoCurso(aluno, curso);
      return;
    }

    matriculaCurso.idAlunosMatriculados.add(aluno.id);
  }

  private desmatricularAluno(aluno: Aluno, curso: Curso) {
    const alunoCheck = this.getAlunoById(aluno.id);
    if (!alunoCheck) {
      throw new Error('Aluno não encontrado');
    }

    const cursoCheck = this.getCursoById(curso.id);
    if (!cursoCheck) {
      throw new Error('Curso não encontrado');
    }

    const matriculaCurso = this.encontrarCursoMatriculado(curso);
    matriculaCurso.idAlunosMatriculados.delete(aluno.id);
  }

  verificarAlunoMatriculadoNoCurso(aluno: Aluno, curso: Curso) {
    const alunoCheck = this.getAlunoById(aluno.id);
    if (!alunoCheck) {
      throw new Error('Aluno não encontrado');
    }

    const cursoCheck = this.getCursoById(curso.id);
    if (!cursoCheck) {
      throw new Error('Curso não encontrado');
    }

    const matriculaCurso = this.encontrarCursoMatriculado(curso);

    if (!matriculaCurso) {
      return false;
    }

    const isAlunoMatriculado = matriculaCurso.idAlunosMatriculados.has(
      aluno.id
    );

    return isAlunoMatriculado;
  }

  private encontrarCursoMatriculado(curso: Curso) {
    const matriculaCurso = this.matriculas.find(
      (matricula) => matricula.idCurso === curso.id
    );
    return matriculaCurso;
  }

  private matricularPrimeiroAlunoNoCurso(aluno: Aluno, curso: Curso) {
    const matricula: Matricula = {
      idCurso: curso.id,
      idAlunosMatriculados: new Set([aluno.id]),
    };
    this.matriculas.push(matricula);
  }
}
