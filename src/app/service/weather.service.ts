import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom, map, take } from "rxjs";
import { City, Weather } from "src/model/model";

@Injectable()
export class WeatherService {

    cities: City[] = [
        {
            city: 'Singapore'
        },
        {
            city: 'Kuala Lumpur'
        },
        {
            city: 'Tokyo'
        },
        {
            city: 'Bangkok'
        },
        {
            city: 'Hong Kong'
        },
        {
            city: 'Beijing'
        }
    ]

    cityObj!: City

    constructor(private httpClient: HttpClient) {}


    // construct the request, specify the parameters such city and API Key
    // spcify the API url
    // build the url for the api call
    doGetWeather(city: string): Promise<Weather>{
        let qs = new HttpParams()
            .set("q", city)
            .set("appid", "1821c44880281756236e2c6b67547fe4")

        return firstValueFrom<Weather>(
            this.httpClient.get<any>('https://api.openweathermap.org/data/2.5/weather', { params: qs})
                .pipe(
                    take(1),
                    map(v => {
                        return {
                            name: v.name,
                            temp: v.main.temp,
                            humidity: v.main.humidity,
                            description: v.weather[0].description
                        } as Weather
                    })
                )
        )
    }   

    insertCityToList(newCity: City) {
        this.cityObj = {city: newCity.toString()}
        this.cities.push(this.cityObj)
    }



}