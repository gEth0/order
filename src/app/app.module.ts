import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AlertComponent } from './snackBars/alert/alert.component';
import { CartComponent } from './components/cart/cart.component';
import { ModifyDialogComponent } from './dialogs/modify-dialog/modify-dialog.component';
import { PaymentPageComponent } from './components/payment-page/payment-page.component';
import { MatTableModule } from '@angular/material/table';
import { PayDialogComponent } from './dialogs/pay-dialog/pay-dialog.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PaymentSnackComponent } from './snackBars/payment-snack/payment-snack.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    NotfoundComponent,
    DishesComponent,
    DishComponent,
    ProfileComponent,
    OrderDialogComponent,
    AlertComponent,
    CartComponent,
    ModifyDialogComponent,
    PaymentPageComponent,
    PayDialogComponent,
    PaymentSnackComponent
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
    MatDialogModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSnackBarModule,
    MatTableModule,
    MatProgressSpinnerModule
  ],
  entryComponents: [OrderDialogComponent,],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
