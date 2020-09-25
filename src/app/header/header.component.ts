import { AuthService } from './../services/auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  private inscricao: Subscription;
  isAlunoLogado = false;
  // alunoLogado;

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.seInscreverAutenticacao();
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  seInscreverAutenticacao() {
    this.inscricao = this.authService.emissorAlunoLogado$.subscribe(
      isAlunoLogado => this.isAlunoLogado = isAlunoLogado
    );
  }

  fazerLogout() {
    this.authService.fazerLogout();
  }

  // TODO: Fazer com | async

  // seInscreverAutenticacao() {
  //   this.alunoLogado = this.authService.emissorAlunoLogado$;
  //   .subscribe(isUsuarioLogado => {
  //     this.isUsuarioLogado = isUsuarioLogado;
  //   });
  // }

}
