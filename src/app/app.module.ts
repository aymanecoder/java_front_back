import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'Login', component: LoginComponent},
      {path: '', redirectTo: '/Login', pathMatch: 'full'},

    ]),
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
