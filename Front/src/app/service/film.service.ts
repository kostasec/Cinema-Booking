import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { Film } from '../model/film.model';

@Injectable()
export class FilmService {

  private readonly API_URL = 'http://localhost:8082/film/';

  dataChange: BehaviorSubject<Film[]> = new BehaviorSubject<Film[]>([]);

  constructor(private httpClient: HttpClient) {}

  public getAllFilm(): Observable<Film[]> {
    this.httpClient.get<Film[]>(this.API_URL).subscribe({
      next: (data) => {
        this.dataChange.next(data);
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.name + ' ' + error.message);
      }}
    );
    return this.dataChange.asObservable();
  }

  public addFilm(film: Film): void {
    this.httpClient.post(this.API_URL, film).subscribe();
  }

  public updateFilm(film: Film): void {
    this.httpClient.put(this.API_URL + film.id, film).subscribe();
  }

  public deleteFilm(film: Film): void {
    this.httpClient.delete(this.API_URL + film.id).subscribe();
  }
}