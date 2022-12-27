import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { WebScrapingComponent } from './web-scraping/web-scraping.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';



const routes :Routes = [{path: 'Login', component: LoginComponent},
{path: 'web-scraping', component: WebScrapingComponent},
{path: '', redirectTo: '/Login', pathMatch: 'full'},
{path: 'home', component: HomeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    WebScrapingComponent,
    NavbarComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,


    RouterModule.forRoot(
      routes,)
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
