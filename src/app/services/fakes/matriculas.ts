import { Matricula } from '../../models/matricula.model';


export const MATRICULAS: Matricula[] = [
  { idCurso: '1', idAlunosMatriculados: new Set(['1', '4']) },
  { idCurso: '2', idAlunosMatriculados: new Set(['1', '2']) },
  { idCurso: '3', idAlunosMatriculados: new Set(['3']) },
  { idCurso: '4', idAlunosMatriculados: new Set(['2', '3']) },
];
