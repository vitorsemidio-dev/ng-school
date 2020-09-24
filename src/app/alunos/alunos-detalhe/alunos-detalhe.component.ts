import { AlunosService } from './../alunos.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Aluno } from '../aluno.model';

@Component({
  selector: 'app-alunos-detalhe',
  templateUrl: './alunos-detalhe.component.html',
  styleUrls: ['./alunos-detalhe.component.scss']
})
export class AlunosDetalheComponent implements OnInit, OnDestroy {

  inscricao: Subscription;
  id: number;
  aluno: Aluno;

  constructor(
    private activeRouter: ActivatedRoute,
    private router: Router,
    private alunosService: AlunosService,
  ) { }

  ngOnInit(): void {
    this.inscricaoParams();
  }

  ngOnDestroy() {
    this.desinscricaoParams();
  }

  private inscricaoParams() {
    console.log(this.activeRouter);
    this.inscricao = this.activeRouter.params.subscribe(param => {
      console.log(param);
      this.id = param.id;
      console.log('chamou');
      this.aluno = this.alunosService.getAluno(this.id);
    });
  }

  private desinscricaoParams() {
    console.log('desinscrição');
    if (this.inscricao) {
      this.inscricao.unsubscribe();
    }
  }

}
