import { Curso } from './curso.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private cursos: Curso[] = [
    { id: 1, nome: 'Angular', descricao: '' },
    { id: 2, nome: 'Java', descricao: '' },
    { id: 3, nome: 'React', descricao: '' },
    { id: 4, nome: 'C', descricao: '' },
  ];

  constructor() { }

  getCursos() {
    return this.cursos;
  }

  getCurso(id: number) {
    const cursoEncontrado = this.cursos.find(curso => curso.id === id);
    return cursoEncontrado;
  }

}
