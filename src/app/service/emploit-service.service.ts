import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmploitServiceService {

  constructor(private http : HttpClient) { }

  getEmpleeFromApi(){
        return this.http.get<any>('http://localhost:8081/webscraping');
  }
}
