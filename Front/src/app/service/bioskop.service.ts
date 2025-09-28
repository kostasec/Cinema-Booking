import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Bioskop } from "../model/bioskop.model";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

@Injectable()
export class BioskopService{

  private readonly API_URL = 'http://localhost:8082/bioskop/';

  dataChange: BehaviorSubject<Bioskop[]> = new BehaviorSubject<Bioskop[]>([]);

  constructor(private httpClient: HttpClient) {}

  public getAllBioskop(): Observable<Bioskop[]> {
    this.httpClient.get<Bioskop[]>(this.API_URL).subscribe({
      next: (data) => {
        this.dataChange.next(data);
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.name + ' ' + error.message);
      }}
    );
    return this.dataChange.asObservable();
  }

  public addBioskop(bioskop: Bioskop): void {
    this.httpClient.post(this.API_URL, bioskop).subscribe();
  }

  public updateBioskop(bioskop: Bioskop): void {
    this.httpClient.put(this.API_URL + bioskop.id, bioskop).subscribe();
  }

  public deleteBioskop(bioskop: Bioskop): void {
    this.httpClient.delete(this.API_URL + bioskop.id).subscribe();
  }

}