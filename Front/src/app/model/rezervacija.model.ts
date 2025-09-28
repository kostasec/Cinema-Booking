import { Film } from "./film.model";
import { Sala } from './sala.model';

export class Rezervacija {
  id!: number;
  broj_osoba!: number;
  cena_karte!: number;
  datum!: Date;
  placeno!: boolean;
  film!: Film;
  sala!: Sala;
}