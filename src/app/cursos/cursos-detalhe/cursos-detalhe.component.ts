import { Curso } from './../curso.model';
import { CursosService } from './../cursos.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cursos-detalhe',
  templateUrl: './cursos-detalhe.component.html',
  styleUrls: ['./cursos-detalhe.component.scss']
})
export class CursosDetalheComponent implements OnInit, OnDestroy {
  inscricao: Subscription;
  curso: Curso;

  constructor(
    private cursosService: CursosService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.inscricaoParams();
  }

  inscricaoParams() {
    this.inscricao = this.activatedRoute.params.subscribe(params => {
      const id = params.id;
      this.curso = this.cursosService.getCurso(id);
    });
  }

  ngOnDestroy() {
    if (this.inscricao) {
      this.inscricao.unsubscribe();
    }
  }

}
