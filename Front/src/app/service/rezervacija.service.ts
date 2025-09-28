import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { Rezervacija } from '../model/rezervacija.model';

@Injectable()
export class RezervacijaService {

  private readonly API_URL = 'http://localhost:8082/rezervacija/';

  private readonly API_URL_P = 'http://localhost:8082/rezervacijeZaFilm/';

  dataChange: BehaviorSubject<Rezervacija[]> = new BehaviorSubject<Rezervacija[]>([]);

  constructor(private httpClient: HttpClient) {}

  public getAllRezervacija(): Observable<Rezervacija[]> {
    this.httpClient.get<Rezervacija[]>(this.API_URL).subscribe({
      next: (data) => {
        this.dataChange.next(data);
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.name + ' ' + error.message);
      }}
    );
    return this.dataChange.asObservable();
  }

  public getRezervacije(idSale: number): Observable<Rezervacija[]> {
    this.httpClient.get<Rezervacija[]>(this.API_URL_P + idSale).subscribe({
      next: (data) => {
        this.dataChange.next(data);
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.name + ' ' + error.message);
      }}
    );
    return this.dataChange.asObservable();
  }

  public addRezervacija(rezervacija: Rezervacija): void {
    this.httpClient.post(this.API_URL, rezervacija).subscribe();
  }

  public updateRezervacija(rezervacija: Rezervacija): void {
    this.httpClient.put(this.API_URL + rezervacija.id, rezervacija).subscribe();
  }

  public deleteRezervacija(id: number): void {
    this.httpClient.delete(this.API_URL + id).subscribe();
  }
}