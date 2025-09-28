import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatGridListModule } from '@angular/material/grid-list';
//import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BioskopComponent } from './bioskop/bioskop.component';
import { FilmComponent } from './film/film.component';
import { SalaComponent } from './sala/sala.component';
import { RezervacijaComponent } from './rezervacija/rezervacija.component';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { AuthorComponent } from './core/author/author.component';
import { Routes, RouterModule } from '@angular/router';
import { BioskopService } from './service/bioskop.service';
import { BioskopDialogComponent } from './dialog/bioskop-dialog/bioskop-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { FilmDialogComponent } from './dialog/film-dialog/film-dialog.component';
import { RezervacijaDialogComponent } from './dialog/rezervacija-dialog/rezervacija-dialog.component';
import { SalaDialogComponent } from './dialog/sala-dialog/sala-dialog.component';
import { FilmService } from './service/film.service';
import { SalaService } from './service/sala.service';
import { RezervacijaService } from './service/rezervacija.service';
import { MatSelectModule } from '@angular/material/select';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

const routes: Routes = [{path: '', redirectTo: 'home', pathMatch: 'full'},
                {path: 'bioskop', component: BioskopComponent},
                {path: 'film', component: FilmComponent},
                {path: 'sala', component: SalaComponent},
                  {path: 'rezervacija', component: RezervacijaComponent},
                {path: 'home', component: HomeComponent},
                {path: 'author', component: AuthorComponent},
                {path: 'about', component: AboutComponent}];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    AuthorComponent,
    BioskopComponent,
    FilmComponent,
    SalaComponent,
    RezervacijaComponent,
    BioskopDialogComponent,
    FilmDialogComponent,
    RezervacijaDialogComponent,
    SalaDialogComponent,
    AboutComponent,
    AuthorComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    //AppRoutingModule,
    MatButtonModule,
    MatSidenavModule,
    MatExpansionModule,
    MatGridListModule,
    HttpClientModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    MatToolbarModule,
    MatTableModule,
    MatSnackBarModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    FormsModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    RouterModule.forRoot(routes)
  ],
  providers: [{provide: MAT_DATE_LOCALE, useValue:'en-GB'}, BioskopService, FilmService, SalaService, RezervacijaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
