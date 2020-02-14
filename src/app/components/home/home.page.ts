import { Component, OnInit } from '@angular/core';

// Models
import { OpenWeather } from 'src/app/models/OpenWeather/open-weather';

// Services
import { OpenWeatherService } from '../../services/OpenWeatherService/open-weather.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private openWeatherService: OpenWeatherService) {}

  ngOnInit() {
    this.openWeatherService.getWeatherById(707860).subscribe(
      (data: OpenWeather) => console.log(data),
      (err) => console.log(err)
    );
  }

}
