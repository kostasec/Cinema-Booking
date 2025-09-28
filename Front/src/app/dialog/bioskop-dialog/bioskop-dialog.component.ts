import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Bioskop } from 'src/app/model/bioskop.model';
import { BioskopService } from 'src/app/service/bioskop.service';

@Component({
  selector: 'app-bioskop-dialog',
  templateUrl: './bioskop-dialog.component.html',
  styleUrls: ['./bioskop-dialog.component.css']
})
export class BioskopDialogComponent {

  public flag!: number;

  constructor(public snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<BioskopDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: Bioskop,
    public bioskopService: BioskopService ) { }

  ngOnInit(): void {
  }

  public add(): void {
    this.bioskopService.addBioskop(this.data);
    this.snackBar.open('Uspešno dodat bioskop ' + this.data.naziv, 'U redu', {duration: 2000});
  }

  public update(): void {
    this.bioskopService.updateBioskop(this.data);
    this.snackBar.open('Uspešno izmenjen bioskop ' + this.data.naziv, 'U redu', {duration: 2000});
  }

  public delete(): void {
    this.bioskopService.deleteBioskop(this.data);
    this.snackBar.open('Uspešno obrisan bioskop ' + this.data.naziv, 'U redu', {duration: 2000});
  }

  public cancel(): void {
    this.dialogRef.close();
    this.snackBar.open('Odustali ste', 'Uredu', {duration: 2000});
  }

}
