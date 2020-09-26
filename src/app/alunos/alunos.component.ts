import { Component, OnInit, OnDestroy } from '@angular/core';

import { AlunosService } from './alunos.service';
import { Aluno } from '../models/aluno.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.scss']
})
export class AlunosComponent implements OnInit, OnDestroy {
  alunos: Aluno[];
  idAlunoSelecionado;
  private sub: Subscription;

  constructor(
    private alunosService: AlunosService,
    private router: Router,
    private activeRouter: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.carregarAlunos();
  }

  ngOnDestroy() {
    // this.sub.unsubscribe();
  }

  carregarAlunos() {
    this.alunos = this.alunosService.getAlunos();
  }

  // private inscriverSeAlunoSelecionado() {
  //   this.sub = this.alunosService.emissorAlunoSelecionado$.subscribe(idAluno => {
  //     console.log(idAluno);
  //     this.idAlunoSelecionado = idAluno
  //   });
  // }

  // private navegacaoPrimeiroAluno() {
  //   const primeiroAluno = this.alunos[0];
  //   if (primeiroAluno) {
  //     this.router.navigate([primeiroAluno.id]);
  //   }
  // }
}
