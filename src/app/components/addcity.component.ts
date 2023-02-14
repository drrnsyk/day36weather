import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { City, Weather } from 'src/model/model';
import { WeatherService } from '../service/weather.service';

@Component({
  selector: 'app-addcity',
  templateUrl: './addcity.component.html',
  styleUrls: ['./addcity.component.css']
})
export class AddcityComponent implements OnInit{

  addCityForm!: FormGroup
  cities: City[] = []

  constructor(private fb: FormBuilder, private weatherSvc: WeatherService, private router: Router) {}

  ngOnInit(): void {
      this.addCityForm = this.createForm()
      this.cities = this.weatherSvc.cities
  }

  addCity() {
    const newCity = this.addCityForm.get('city')?.value as City
    console.info('>>> city: ', newCity)
    this.weatherSvc.insertCityToList(newCity)
    this.addCityForm.reset()
  }


  //helper function
  private createForm() {
    return this.fb.group({
      city: this.fb.control('', Validators.required)
    })
  }

}
