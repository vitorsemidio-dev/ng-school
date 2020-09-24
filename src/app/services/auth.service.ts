import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Aluno } from '../alunos/aluno.model';

class Usuario {
  email: string;
  senha: string;
}

class Matricula {
  idCurso: number;
  idAlunos: number[];
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private matriculas: Matricula[] = [
    { idCurso: 1, idAlunos: [1, 4] },
    { idCurso: 2, idAlunos: [2, 3] },
    { idCurso: 3, idAlunos: [1, 2, 3] },
    { idCurso: 4, idAlunos: [2, 4] },
  ];

  private alunos: Aluno[] = [
    { id: 1, nome: 'Ana', descricao: 'Desenvolvedora apaixonada por Vue', email: 'ana@email', endereco: 'Sao Paulo - SP' },
    { id: 2, nome: 'Bernardo', descricao: 'Criador de conteudo', email: 'bernardo@email', endereco: 'Sao Paulo - SP' },
    { id: 3, nome: 'Carol', descricao: 'Crio videos sobre minhas experiências diárias', email: 'Carol@email', endereco: 'Sao Paulo - SP' },
    { id: 4, nome: 'Diego', descricao: 'Desenvolvedor mobile iOS', email: 'Diego@email', endereco: 'Sao Paulo - SP' },
  ];

  private isUsuarioLogado = false;
  emissorUsuarioLogado = new EventEmitter<boolean>();
  usuarioLogado = {
    id: 2, nome: 'Bernardo', descricao: 'Criador de conteudo', email: 'bernardo@email', endereco: 'Sao Paulo - SP'
  };

  constructor(
    private router: Router,
  ) { }

  fazerLogin(usuario: Usuario) {
    const { email, senha } = usuario;
    const alunoIndex = this.alunos.findIndex(aluno => aluno.email === usuario.email);
    this.usuarioLogado = this.alunos[alunoIndex] || this.alunos[0];
    this.isUsuarioLogado = true;
    this.router.navigate(['/cursos']);

    this.emissorUsuarioLogado.emit(this.isUsuarioLogado);
  }

  fazerLogout() {
    this.isUsuarioLogado = false;
    this.emissorUsuarioLogado.emit(this.isUsuarioLogado);
  }

  usuarioEstaLogado() {
    return this.isUsuarioLogado;
  }

  verificarAlunoInscrito(idCurso: number) {
    const curso = this.matriculas.find(matricula => matricula.idCurso === idCurso);
    const usuarioInscrito = curso.idAlunos.includes(this.usuarioLogado.id);
    return usuarioInscrito;
  }
}
