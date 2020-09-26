import { FakeDbService } from './../services/fake-db.service';
import { Injectable } from '@angular/core';

import { Aluno } from '../models/aluno.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {
  private alunos: Aluno[];
  emissorAlunoSelecionado$ = new Subject<string>();


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

  emitirAlunoSelecionado(idAluno: string) {
    this.emissorAlunoSelecionado$.next(idAluno);
  }
}
