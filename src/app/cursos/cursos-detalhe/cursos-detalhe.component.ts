import { MatriculaService } from './../../services/matricula.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { Curso } from '../../models/curso.model';
import { CursosService } from './../cursos.service';

@Component({
  selector: 'app-cursos-detalhe',
  templateUrl: './cursos-detalhe.component.html',
  styleUrls: ['./cursos-detalhe.component.scss']
})
export class CursosDetalheComponent implements OnInit, OnDestroy {
  inscricao: Subscription;
  curso: Curso;
  alunoMatriculado = false;

  constructor(
    private cursosService: CursosService,
    private activatedRoute: ActivatedRoute,
    private matriculaService: MatriculaService,
  ) { }

  ngOnInit(): void {
    this.inscricaoParams();
  }

  inscricaoParams() {
    this.inscricao = this.activatedRoute.params.subscribe(params => {
      const id = params.id;
      this.curso = this.cursosService.getCurso(id);
      if (this.curso) {
        this.alunoMatriculado = this.matriculaService.verificarAlunoLogadoInscrito(id);
      }
    });
  }

  ngOnDestroy() {
    if (this.inscricao) {
      this.inscricao.unsubscribe();
    }
  }

  matricularAluno() {
    // dados aluno logado
    this.alunoMatriculado = true;
    console.log('aluno matriculado');
    this.cursosService.matricularAluno(this.curso);
  }

}
