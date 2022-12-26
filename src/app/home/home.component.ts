import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {DataType} from '../DataType'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

 dataSource = new MatTableDataSource<DataType>();
  displayedColumns: string[] = ['column1', 'column2', 'column3'];

  constructor() { }

  ngOnInit() {
    // Fetch the data for the table and assign it to the data source
    this.dataSource.data = [{ column1: 'value1', column2: 'value2', column3: 'value3' }];
  }

}
