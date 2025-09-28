import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs/internal/Observable';
import { SalaDialogComponent } from '../dialog/sala-dialog/sala-dialog.component';
import { Sala } from '../model/sala.model';
import { SalaService } from '../service/sala.service';
import { Bioskop } from './../model/bioskop.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-sala',
  templateUrl: './sala.component.html',
  styleUrls: ['./sala.component.css']
})
export class SalaComponent implements OnInit {

  displayedColumns = ['id', 'kapacitet', 'broj_redova', 'bioskop', 'actions'];

  bioskop!: Bioskop;

  //dataSource!: Observable<Sala[]>;
  dataSource!: MatTableDataSource<Sala>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(public salaService: SalaService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadData();
  }

  public loadData(){
    //this.dataSource = this.salaService.getAllSala();
    this.salaService.getAllSala().subscribe( data => {
      this.dataSource = new MatTableDataSource(data);

      // pretraga po nazivu stranog kljuca
      this.dataSource.filterPredicate = (data: any, filter: string) => {
        const accumulator = (currentTerm: string, key: string) => {
          return key === 'bioskop' ? currentTerm + data.bioskop.naziv : currentTerm + data[key];
        };
        const dataStr = Object.keys(data).reduce(accumulator, '').toLowerCase();
        const transformedFilter = filter.trim().toLowerCase();
        return dataStr.indexOf(transformedFilter) !== -1;
      };

      this.dataSource.sortingDataAccessor = (data:any, property) =>{
        switch(property){
          case 'id': return data[property];
          case 'kapacitet': return data[property];
          case 'brojRedova': return data[property];
          case 'bioskop': return data.bioskop.naziv.toLocaleLowerCase();
          default: return data[property].toLocaleLowerCase();
        }
      };
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
}

  public openDialog(flag: number, id: number, kapacitet: number, brojRedova: number, bioskop: Bioskop) {
    const dialog = this.dialog.open(SalaDialogComponent, {data: {id: id, kapacitet: kapacitet, brojRedova: brojRedova, bioskop: bioskop}});
    dialog.componentInstance.flag = flag;
    dialog.afterClosed().subscribe(result => {
      if (result === 1) {
        this.loadData();
      }
    })
  }

  applyFilter(filterValue: string) {
    filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

}
