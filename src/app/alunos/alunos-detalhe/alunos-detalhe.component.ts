import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Aluno } from '../../models/aluno.model';
import { Curso } from '../../models/curso.model';
import { AlunosService } from './../alunos.service';
import { MatriculaService } from './../../services/matricula.service';

@Component({
  selector: 'app-alunos-detalhe',
  templateUrl: './alunos-detalhe.component.html',
  styleUrls: ['./alunos-detalhe.component.scss'],
})
export class AlunosDetalheComponent implements OnInit, OnDestroy {
  inscricao: Subscription;
  id: string;
  aluno: Aluno;
  cursosMatriculado: Curso[];

  constructor(
    private activeRouter: ActivatedRoute,
    private router: Router,
    private alunosService: AlunosService,
    private matriculaService: MatriculaService
  ) {}

  ngOnInit(): void {
    this.inscricaoParams();
  }

  ngOnDestroy() {
    this.desinscricaoParams();
  }

  private inscricaoParams() {
    console.log(this.activeRouter);
    this.inscricao = this.activeRouter.params.subscribe((param) => {
      this.id = param.id;
      this.aluno = this.alunosService.getAluno(this.id);
      if (this.aluno) {
        this.cursosMatriculado = this.buscarCursosDoAluno();
      } else {
        this.cursosMatriculado = [];
      }
    });
  }

  private desinscricaoParams() {
    if (this.inscricao) {
      this.inscricao.unsubscribe();
    }
  }

  private buscarCursosDoAluno() {
    return this.matriculaService.buscarCursosDoAluno(this.aluno.id);
  }
}
