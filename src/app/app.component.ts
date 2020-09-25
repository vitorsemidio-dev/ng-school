import { AuthService } from './services/auth.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  isUsuarioLogado = false;
  private inscricao: Subscription;

  constructor(
    private authService: AuthService,
  ) {}

  ngOnInit() {
    this.seInscreverAutenticacao();
  }

  ngOnDestroy() {
    if (this.inscricao) {
      this.inscricao.unsubscribe();
    }
  }

  seInscreverAutenticacao() {
    this.inscricao = this.authService.emissorAlunoLogado$.subscribe(isUsuarioLogado => {
      this.isUsuarioLogado = isUsuarioLogado;
    });
  }

}
