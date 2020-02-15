import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

// Models
import { OpenWeather } from 'src/app/models/OpenWeather/open-weather';

// Services
import { OpenWeatherService } from '../../services/OpenWeatherService/open-weather.service';
import { City } from 'src/app/models/city';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  private cities = new Array<string>();

  constructor(private openWeatherService: OpenWeatherService, public toastController: ToastController) {}

  ngOnInit() {
    this.openWeatherService.getWeatherById(707860).subscribe(
      (data: OpenWeather) => console.log(data),
      (err) => console.log(err)
    );
  }

  async addCity(city: string) {
    let i = this.cities.indexOf(city);
    if (i == -1) this.cities.push(city);
    else {
      let toast = await this.toastController.create({
        message: 'This city is already showed',
        duration: 5000
      });
      toast.present();
    }
    console.log(this.cities);
  }
}