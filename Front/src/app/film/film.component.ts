import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs/internal/Observable';
import { FilmDialogComponent } from '../dialog/film-dialog/film-dialog.component';
import { Film } from './../model/film.model';
import { FilmService } from './../service/film.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent {

  displayedColumns = ['id', 'naziv', 'recenzija', 'trajanje', 'zanr', 'actions'];

  selektovanFilm!: Film;

  //dataSource!: Observable<Film[]>;
  dataSource!: MatTableDataSource<Film>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(public filmService: FilmService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadData();
  }

  public loadData(){
    //this.dataSource = this.filmService.getAllFilm();
    this.filmService.getAllFilm().subscribe( data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sortingDataAccessor = (data:any, property) =>{
        switch(property){
          case 'id': return data[property];
          case 'recenzija': return data[property];
          case 'trajanje': return data[property];
          default: return data[property].toLocaleLowerCase();
        }

      };
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  public openDialog(flag: number, id: number, naziv: string, recenzija: number, trajanje: number, zanr: string) {
    const dialog = this.dialog.open(FilmDialogComponent, {data: {id: id, naziv: naziv, recenzija: recenzija, trajanje: trajanje, zanr: zanr}});
    dialog.componentInstance.flag = flag;
    dialog.afterClosed().subscribe(result => {
      if (result === 1) {
        this.loadData();
      }
    })
  }

  public selectedRow(row: Film): void {
    this.selektovanFilm = row;
  }

  applyFilter(filterValue: string) {
    filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

}
