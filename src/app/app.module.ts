import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { WebScrapingComponent } from './components/web-scraping/web-scraping.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
// import {MatButtonModule} from '@angular/material/button';
// import {MatTableModule} from '@angular/material/table';
// import {MatDialog, MatDialogModule} from '@angular/material/dialog';
// import {MatPaginatorModule} from '@angular/material/paginator';



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
    HttpClientModule,
    ReactiveFormsModule,
 




    RouterModule.forRoot(
      routes,)
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
