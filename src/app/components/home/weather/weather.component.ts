import { Component, OnInit, Input } from '@angular/core';
import { ToastController } from '@ionic/angular';

// Models
import { OpenWeather } from 'src/app/models/OpenWeather/open-weather';

// Services
import { OpenWeatherService } from '../../../services/OpenWeatherService/open-weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  @Input() city: number;
  private openWeather: OpenWeather;
  private loaded = false;

  constructor(private openWeatherService: OpenWeatherService, public toastController: ToastController) { }

  ngOnInit() {
    this.openWeatherService.getWeatherById(this.city).subscribe(
      (data: OpenWeather) => {
        this.openWeather = data;
        this.loaded = true;
      },
      async () => {
        let toast = await this.toastController.create({
          message: 'Oops, uneable to find city',
          duration: 5000
        });
        toast.present();
      }
    );
  }

}
