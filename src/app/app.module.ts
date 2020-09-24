import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';
import { FakeDbService } from './services/fake-db.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NaoEncontradoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [
    AuthService,
    AuthGuard,
    FakeDbService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
