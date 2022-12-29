import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent {


  dataSource:any = [

    {

      "name":"Correctly Classified Instances",
      "number":"52",
      "pors": "92.8571 %"
    },

    {

      "name":"Incorrectly Classified Instances",
      "number":"4",
      "pors": "7.1429 %"
    },

    {

      "name":"Kappa statistic",
      "number":"0.8427",
      "pors":" "
    },

    {

      "name":"Mean absolute error",
      "number":"0.8427",
      "pors":" "
    },


    {

      "name":"Root mean squared error",
      "number":"0.1794",
      "pors":" "
    },


    {

      "name":"Relative absolute error",
      "number": "16.9816 %",
      "pors": " "
    },

    {

      "name":"Root relative squared error",
      "number": "44.2894 %" ,
      "pors": ""
    },

    {

      "name":"Total Number of Instances ",
      "number": "56",
      "pors": " "
    },

    {

      "name":"Relative absolute error",
      "number": "0.0567",
      "pors": " "
    }
  ];



  constructor(private http: HttpClient) {



   }
   headers = new HttpHeaders()
  .append('Accept', 'application/json')
  .append('Content-Type', 'application/json');













  // GET


  ngOnInit() {




    this.getMetrics();
  }
  getMetrics() {

    this.http.get("http://localhost:8081/model",  {responseType: 'text'}).subscribe((response:any) => {

      console.log(response);

    })
  }

}
