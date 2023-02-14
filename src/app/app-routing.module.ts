import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcityComponent } from './components/addcity.component';
import { CityweatherComponent } from './components/cityweather.component';

const routes: Routes = [
  { path: '', component: AddcityComponent}, // home page
  { path: 'weather/:city', component: CityweatherComponent}, // display weather of city with city as the activated route
  { path: '**', redirectTo: '/', pathMatch: 'full'}, // catch all other routes to display the homepage
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
