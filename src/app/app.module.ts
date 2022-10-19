import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardsComponent } from './components/cards/cards.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { MatGridListModule } from '@angular/material/grid-list';
import { DishesComponent } from './components/dishes/dishes.component';
import { DishComponent } from './components/dish/dish.component';
import { ProfileComponent } from './components/profile/profile.component';
import { OrderDialogComponent } from './components/dialogs/order-dialog/order-dialog.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    HomeComponent,
    NavComponent,
    NotfoundComponent,
    DishesComponent,
    DishComponent,
    ProfileComponent,
    OrderDialogComponent
  ],
  //FIX HERE BUG
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    HttpClientModule,
    MatGridListModule,
    MatDialogModule
  ],
  entryComponents: [OrderDialogComponent,],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
