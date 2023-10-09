import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { Weather } from 'src/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private weatherService : WeatherService){}

  ngOnInit(): void {
    this.weatherService.getTemp(this.cityName).subscribe((data) => this.data = data)
  }

  data! : Weather
  cityName : string = 'london'

  title = 'Weather';

  onSubmit(){
   return this.weatherService.getTemp(this.cityName).subscribe((data) => this.data = data)
  }
}
