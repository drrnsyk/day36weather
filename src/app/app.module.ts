import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CityweatherComponent } from './components/cityweather.component';
import { AddcityComponent } from './components/addcity.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { WeatherService } from './service/weather.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    CityweatherComponent,
    AddcityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
