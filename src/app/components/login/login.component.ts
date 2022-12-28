import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { LoginService } from 'src/app/service/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  headers = new HttpHeaders()
    .append('Accept', 'application/json')
    .append('Content-Type', 'application/json');


  form!: FormGroup
  constructor(private formBuiler: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.form = this.formBuiler.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required]
    })
  }

  login() {


    this.http.post("http://localhost:8081/login", this.form.value, { headers: this.headers })
      .subscribe(res => {
        this.router.navigate(['/home']);
      })


  }



}
