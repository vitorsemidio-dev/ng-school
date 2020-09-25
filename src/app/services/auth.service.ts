import {  Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

import { Aluno } from '../models/aluno.model';
import { FakeDbService } from './fake-db.service';
import { AlunosService } from './../alunos/alunos.service';

class Usuario {
  email: string;
  senha: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAlunoLogado = false;
  emissorAlunoLogado$ = new Subject<boolean>();
  alunoLogado: Aluno;

  constructor(
    private router: Router,
    private alunoService: AlunosService,
  ) { }

  fazerLogin(usuario: Usuario) {
    const { email, senha } = usuario;
    const alunoCheck = this.alunoService.getAlunoByEmail(email);
    if (!alunoCheck) {
      return;
    }

    if (alunoCheck.senha === senha) {
      this.alunoLogado = alunoCheck;

      this.isAlunoLogado = true;

      this.emissorAlunoLogado$.next(this.isAlunoLogado);


      this.router.navigate(['/cursos']);
    } else {
      // TODO: senha incorreta ou usuário inexistente...
    }
  }

  fazerLogout() {
    this.alunoLogado = null;
    this.isAlunoLogado = false;
    this.emissorAlunoLogado$.next(this.isAlunoLogado);
  }

  usuarioEstaLogado() {
    return this.isAlunoLogado;
  }


}
