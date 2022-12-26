import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    MatPaginatorModule,
    AppRoutingModule,
    MatTableModule,
    RouterModule.forRoot([
      {path: 'Login', component: LoginComponent},
      {path: '', redirectTo: '/Login', pathMatch: 'full'},
      {path: 'home', component: HomeComponent},
    ]),
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
