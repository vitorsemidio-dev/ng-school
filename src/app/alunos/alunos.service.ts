import { FakeDbService } from './../services/fake-db.service';
import { Injectable } from '@angular/core';

import { Aluno } from '../models/aluno.model';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {
  private alunos: Aluno[];

  constructor(
    private fakeDbService: FakeDbService,
  ) { }

  getAlunos() {
    return this.fakeDbService.getAlunos();
  }

  getAluno(id: string) {
    const alunoEncontrado = this.fakeDbService.getAlunoById(id);
    return alunoEncontrado;
  }

  getAlunoByEmail(email: string) {
    const alunoEncontrado = this.fakeDbService.getAlunoByEmail(email);
    return alunoEncontrado;
  }
}
