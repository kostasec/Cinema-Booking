import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Film } from 'src/app/model/film.model';
import { Sala } from 'src/app/model/sala.model';
import { FilmService } from 'src/app/service/film.service';
import { SalaService } from 'src/app/service/sala.service';
import { RezervacijaService } from 'src/app/service/rezervacija.service';
import { Rezervacija } from './../../model/rezervacija.model';

@Component({
  selector: 'app-rezervacija-dialog',
  templateUrl: './rezervacija-dialog.component.html',
  styleUrls: ['./rezervacija-dialog.component.css']
})
export class RezervacijaDialogComponent implements OnInit {

  public flag!: number;

  filmovi!: Film[];
  sale!: Sala[];

  constructor(public snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<RezervacijaDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: Rezervacija,
    public rezervacijaService: RezervacijaService,
    public salaService: SalaService,
    public filmService: FilmService ) { }

  ngOnInit(): void {
    this.filmService.getAllFilm().subscribe(filmovi =>
    this.filmovi = filmovi);
    this.salaService.getAllSala().subscribe(sale =>
    this.sale = sale);
  }

  public add(): void {
    this.rezervacijaService.addRezervacija(this.data);
    this.snackBar.open('Uspešno dodata rezervacija ' + this.data.id, 'Uredu', {duration: 2000});
  }

  public update(): void {
    this.rezervacijaService.updateRezervacija(this.data);
    this.snackBar.open('Uspešno izmenjena rezervacija ' + this.data.id, 'Uredu', {duration: 2000});
  }

  public delete(): void {
    this.rezervacijaService.deleteRezervacija(this.data.id);
    this.snackBar.open('Uspešno obrisana rezervacija ' + this.data.id, 'Uredu', {duration: 2000});
  }

  public cancel(): void {
    this.dialogRef.close();
    this.snackBar.open('Odustali ste', 'Uredu', {duration: 2000});
  }

  compareTo(a: any, b: any) {
    return a.id === b.id;
  }

}