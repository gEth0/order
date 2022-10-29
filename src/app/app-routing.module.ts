import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DishComponent } from './components/dish/dish.component';
import { DishesComponent } from './components/dishes/dishes.component';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CartComponent } from './components/cart/cart.component';
import { PaymentPageComponent } from './components/payment-page/payment-page.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';


const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "homepage" },
  { path: "homepage", component: HomeComponent, },
  { path: "login", component: LoginComponent, },
  { path: "signUp", component: SignUpComponent, },
  { path: "dishes", component: DishesComponent, canActivate: [AuthGuard] },
  { path: "dishes/:id", component: DishComponent, canActivate: [AuthGuard] },
  { path: "profile", component: ProfileComponent, canActivate: [AuthGuard] },
  { path: "profile/cart", component: CartComponent, canActivate: [AuthGuard] },
  { path: "profile/cart/payment", component: PaymentPageComponent, canActivate: [AuthGuard] },
  { path: "notfound", component: NotfoundComponent },
  { path: "**", redirectTo: "notfound" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
