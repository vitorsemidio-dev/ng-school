import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-alunos-form',
  templateUrl: './alunos-form.component.html',
  styleUrls: ['./alunos-form.component.scss']
})
export class AlunosFormComponent implements OnInit, OnDestroy {

  inscricao: Subscription;
  id: number;

  constructor(
    private activeRouter: ActivatedRoute,
    private router: Router,
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
    });
  }

  private desinscricaoParams() {
    console.log('desinscrição');
    if (this.inscricao) {
      this.inscricao.unsubscribe();
    }
  }

}
