import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { City, Weather } from 'src/model/model';
import { WeatherService } from '../service/weather.service';

@Component({
  selector: 'app-cityweather',
  templateUrl: './cityweather.component.html',
  styleUrls: ['./cityweather.component.css']
})
export class CityweatherComponent implements OnInit{

  city!: ''
  params$!: Subscription
  weather!: Weather

  constructor(private weatherSvc: WeatherService, 
              private activatedRoute: ActivatedRoute, 
              private router: Router) {}

  ngOnInit(): void {
      this.params$ = this.activatedRoute.params.subscribe(
        (params)=>{
          this.city = params['city'] // taking the parameterize value out by subscribing to it
        }
      )
      // call the API to get the api result, by passing in the parameter
      // use service to construct the get request and construct the api url params
      this.weatherSvc.doGetWeather(this.city)
        .then(result => {
          console.info('>>> in then, result: ', result)
          this.weather = result
        })
        .catch(error => {
          console.info('>>> in error')
          console.error('>>> error: ', error)
        })
  }

}
