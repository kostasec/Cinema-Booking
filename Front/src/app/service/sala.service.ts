import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { Sala } from '../model/sala.model';

@Injectable()
export class SalaService {

  private readonly API_URL = 'http://localhost:8082/sala/';

  dataChange: BehaviorSubject<Sala[]> = new BehaviorSubject<Sala[]>([]);

  constructor(private httpClient: HttpClient) {}

  public getAllSala(): Observable<Sala[]> {
    this.httpClient.get<Sala[]>(this.API_URL).subscribe({
      next: (data) => {
        this.dataChange.next(data);
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.name + ' ' + error.message);
      }}
    );
    return this.dataChange.asObservable();
  }

  public addSala(sala: Sala): void {
    this.httpClient.post(this.API_URL, sala).subscribe();
  }

  public updateSala(sala: Sala): void {
    this.httpClient.put(this.API_URL + sala.id, sala).subscribe();
  }

  public deleteSala(id: number): void {
    this.httpClient.delete(this.API_URL + id).subscribe();
  }
}