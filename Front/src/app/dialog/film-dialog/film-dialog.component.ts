import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Film } from 'src/app/model/film.model';
import { FilmService } from 'src/app/service/film.service';


@Component({
  selector: 'app-film-dialog',
  templateUrl: './film-dialog.component.html',
  styleUrls: ['./film-dialog.component.css']
})
export class FilmDialogComponent implements OnInit {

  public flag!: number;

  constructor(public snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<FilmDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: Film,
    public filmService: FilmService ) { }

  ngOnInit(): void {
  }

  public add(): void {
    this.filmService.addFilm(this.data);
    this.snackBar.open('Uspešno dodat film ' + this.data.naziv, 'Uredu', {duration: 2000});
  }

  public update(): void {
    this.filmService.updateFilm(this.data);
    this.snackBar.open('Uspešno izmenjen film ' + this.data.naziv, 'Uredu', {duration: 2000});
  }

  public delete(): void {
    this.filmService.deleteFilm(this.data);
    this.snackBar.open('Uspešno obrisan film ' + this.data.id, 'Uredu', {duration: 2000});
  }

  public cancel(): void {
    this.dialogRef.close();
    this.snackBar.open('Odustali ste', 'Uredu', {duration: 2000});
  }

}
