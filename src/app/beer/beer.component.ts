import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from '../services/data.service';
import { IBeer } from '../interfaces/ibeer';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css']
})
export class BeerComponent implements OnInit {

  count = 26;

  displayedColumns: string[] = ['id', 'name', 'image_url', 'tagline', 'abv'];
  dataSource: MatTableDataSource<IBeer>;

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private dataService: DataService) { }

  async addBeer() {

    this.dataSource = new MatTableDataSource(await this.dataService.save(this.count++));

    this.dataSource.sort = this.sort;

    this.dataSource.paginator = this.paginator;
  }

  async ngOnInit() {
    const data = await this.dataService.getBeers();

    this.dataSource = new MatTableDataSource(data);

    this.dataSource.sort = this.sort;

    this.dataSource.paginator = this.paginator;
  }



}
