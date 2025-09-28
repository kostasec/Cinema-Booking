import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Bioskop } from 'src/app/model/bioskop.model';
import { Sala } from 'src/app/model/sala.model';
import { BioskopService } from 'src/app/service/bioskop.service';
import { SalaService } from 'src/app/service/sala.service';



@Component({
  selector: 'app-sala-dialog',
  templateUrl: './sala-dialog.component.html',
  styleUrls: ['./sala-dialog.component.css']
})
export class SalaDialogComponent implements OnInit {

  public flag!: number;

  bioskopi!: Bioskop[];

  constructor(public snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<SalaDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: Sala,
    public salaService: SalaService,
    public bioskopService: BioskopService ) { }

  ngOnInit(): void {
      this.bioskopService.getAllBioskop().subscribe(bioskopi =>
      this.bioskopi = bioskopi)
  }

  public add(): void {
    this.salaService.addSala(this.data);
    this.snackBar.open('Uspešno dodata sala ' + this.data.id, 'Uredu', {duration: 2000});
  }

  public update(): void {
    this.salaService.updateSala(this.data);
    this.snackBar.open('Uspešno izmenjena sala ' + this.data.id, 'Uredu', {duration: 2000});
  }

  public delete(): void {
    this.salaService.deleteSala(this.data.id);
    this.snackBar.open('Uspešno obrisana sala ' + this.data.id, 'Uredu', {duration: 2000});
  }

  public cancel(): void {
    this.dialogRef.close();
    this.snackBar.open('Odustali ste', 'Uredu', {duration: 2000});
  }

  compareTo(a: any, b: any) {
    return a.id === b.id;
  }

}
