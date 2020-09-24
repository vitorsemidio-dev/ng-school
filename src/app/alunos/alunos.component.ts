import { AlunosService } from './alunos.service';
import { Component, OnInit } from '@angular/core';
import { Aluno } from './aluno.model';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.scss']
})
export class AlunosComponent implements OnInit {
  alunos: Aluno[];

  constructor(
    private alunosService: AlunosService,
  ) { }

  ngOnInit(): void {
    this.carregarAlunos();
  }

  carregarAlunos() {
    this.alunos = this.alunosService.getAlunos();
  }

}
