import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DishComponent } from './components/dish/dish.component';
import { DishesComponent } from './components/dishes/dishes.component';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "homepage" },
  { path: "homepage", component: HomeComponent },
  { path: "dishes", component: DishesComponent },
  { path: "dishes/:id", component: DishComponent },
  { path: "profile", component: ProfileComponent },
  { path: "profile/cart", component: CartComponent },
  { path: "notfound", component: NotfoundComponent },
  { path: "**", redirectTo: "notfound" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
