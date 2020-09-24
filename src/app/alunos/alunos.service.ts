import { Injectable } from '@angular/core';

import { Aluno } from './aluno.model';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {
  private alunos: Aluno[] = [
    { id: 1, nome: 'Ana', descricao: 'Desenvolvedora apaixonada por Vue', email: 'ana@email', endereco: 'Sao Paulo - SP' },
    { id: 2, nome: 'Bernardo', descricao: 'Criador de conteudo', email: 'bernardo@email', endereco: 'Sao Paulo - SP' },
    { id: 3, nome: 'Carol', descricao: 'Crio videos sobre minhas experiências diárias', email: 'Carol@email', endereco: 'Sao Paulo - SP' },
    { id: 4, nome: 'Diego', descricao: 'Desenvolvedor mobile iOS', email: 'Diego@email', endereco: 'Sao Paulo - SP' },
  ];

  constructor() { }

  getAlunos() {
    return this.alunos;
  }

  getAluno(id: number) {
    const alunoEncontrado = this.alunos.find(aluno => aluno.id == id);
    return alunoEncontrado;
  }
}
