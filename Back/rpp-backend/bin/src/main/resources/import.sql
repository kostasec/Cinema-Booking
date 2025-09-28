----------- bioskop -----------------------------------------------------

INSERT INTO "bioskop"("id", "naziv", "adresa") VALUES(nextval('bioskop_seq'), 'ArenaCinaplex', 'Bulevar Mihajla Pupina 60, Novi Sad');
INSERT INTO "bioskop"("id", "naziv", "adresa") VALUES(nextval('bioskop_seq'), 'Promenada', 'Bulevar Oslobodjenja 120, Novi Sad');
INSERT INTO "bioskop"("id", "naziv", "adresa") VALUES(nextval('bioskop_seq'), 'Big', 'Sanandrejski put 11, Novi Sad');


----------- film -----------------------------------------------------

INSERT INTO "film"("id", "naziv", "recenzija","trajanje","zanr") VALUES (nextval('film_seq'), 'Susa', 10,120,'Komedija');
INSERT INTO "film"("id", "naziv", "recenzija","trajanje","zanr") VALUES (nextval('film_seq'), 'Air', 8,120,'Drama');
INSERT INTO "film"("id", "naziv", "recenzija","trajanje","zanr") VALUES (nextval('film_seq'), 'Detektiv Marlou', 9,110,'Triler');
INSERT INTO "film"("id", "naziv", "recenzija","trajanje","zanr") VALUES (nextval('film_seq'), 'Macke u muzeju', 7,100,'Animirani');
INSERT INTO "film"("id", "naziv", "recenzija","trajanje","zanr") VALUES (nextval('film_seq'), 'Munje', 5,95,'Komedija');

----------- sala -----------------------------------------------------

INSERT INTO "sala"("id", "kapacitet", "broj_redova", "bioskop") VALUES (nextval('sala_seq'), 150,10,1);
INSERT INTO "sala"("id", "kapacitet", "broj_redova", "bioskop") VALUES (nextval('sala_seq'), 120,8,1);
INSERT INTO "sala"("id", "kapacitet", "broj_redova", "bioskop") VALUES (nextval('sala_seq'), 200,20,1);
INSERT INTO "sala"("id", "kapacitet", "broj_redova", "bioskop") VALUES (nextval('sala_seq'), 150,10,2);
INSERT INTO "sala"("id", "kapacitet", "broj_redova", "bioskop") VALUES (nextval('sala_seq'), 250,25,2);
INSERT INTO "sala"("id", "kapacitet", "broj_redova", "bioskop") VALUES (nextval('sala_seq'), 50,5,3);
INSERT INTO "sala"("id", "kapacitet", "broj_redova", "bioskop") VALUES (nextval('sala_seq'), 150,10,3);
----------- rezervacija -----------------------------------------------------

INSERT INTO "rezervacija"("id", "broj_osoba", "cena_karte", "datum", "placeno", "film", "sala") VALUES (nextval('rezervacija_seq'), 1, 500, to_date('15.04.2023','dd.mm.yyyy.'),true, 1, 1);
INSERT INTO "rezervacija"("id", "broj_osoba", "cena_karte", "datum", "placeno", "film", "sala") VALUES (nextval('rezervacija_seq'), 2, 1000, to_date('10.05.2023','dd.mm.yyyy.'),false, 2, 4);
INSERT INTO "rezervacija"("id", "broj_osoba", "cena_karte", "datum", "placeno", "film", "sala") VALUES (nextval('rezervacija_seq'), 1, 700, to_date('20.04.2023','dd.mm.yyyy.'),true, 3,1);
INSERT INTO "rezervacija"("id", "broj_osoba", "cena_karte", "datum", "placeno", "film", "sala") VALUES (nextval('rezervacija_seq'), 3, 2000, to_date('25.04.2023','dd.mm.yyyy.'),false, 4,6);

