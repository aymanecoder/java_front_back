import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
// import {MatPaginator} from '@angular/material/paginator';
// import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';

// import {MatDialog} from '@angular/material/dialog';
import { EmploitServiceService } from 'src/app/service/emploit-service.service';
@Component({
  selector: 'app-web-scraping',
  templateUrl: './web-scraping.component.html',
  styleUrls: ['./web-scraping.component.css']
})
export class WebScrapingComponent implements OnInit{

  posts:any;

  // displayedColumns: string[] = ['Titre', 'Type_du_contrat', 'Date_de_publication', 'Nom_entreprise','Metier'];
  // dataSource = new MatTableDataSource<any>;

  // @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private Empl:EmploitServiceService,private router: Router) { }

  ngOnInit(): void {
    this.getEmpleeFromApi()
  }
  getEmpleeFromApi(){
     return this.Empl.getEmpleeFromApi().subscribe((res) => {
       console.log(res);
       this.posts = res;

     });
    }
}
