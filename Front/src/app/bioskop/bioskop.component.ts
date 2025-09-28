import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, filter } from 'rxjs';
import { Bioskop } from '../model/bioskop.model';
import { BioskopService } from '../service/bioskop.service';
import { MatDialog } from '@angular/material/dialog';
import { BioskopDialogComponent } from '../dialog/bioskop-dialog/bioskop-dialog.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-bioskop',
  templateUrl: './bioskop.component.html',
  styleUrls: ['./bioskop.component.css']
})
export class BioskopComponent implements OnInit {

  displayedColumns = ['id', 'naziv', 'adresa', 'actions'];

  //dataSource!: Observable<Bioskop[]>;
  dataSource!: MatTableDataSource<Bioskop>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(public bioskopService: BioskopService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadData();
  }

  public loadData(){
    //this.dataSource = this.bioskopService.getAllBioskop();
    this.bioskopService.getAllBioskop().subscribe( data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sortingDataAccessor = (data: any, property) => {
        switch(property) {
          case 'id' : return data[property];
          default: return data[property].toLocaleLowerCase();
        }
      };
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  public openDialog(flag: number, id: number, naziv: string, adresa: string) {

    //konstanta dijalog koja će pozvati da se otvori Bioskop dialog
    //definišemo vrednosti koje se prosleđuju dijalogu
    const dialog = this.dialog.open(BioskopDialogComponent, {data: {id: id, naziv: naziv, adresa: adresa}});

    //dijalogu prosleđujemo flag obeležje
    dialog.componentInstance.flag = flag;
    dialog.afterClosed().subscribe(result => {
      if (result === 1) {
        this.loadData();
      }
    })
  }

  applyFilter(filterValue : string) {
    filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

}