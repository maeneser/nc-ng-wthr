import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

// Models
import { City } from 'src/app/models/city';

// Services
import { CitiesService } from '../../../../services/CitiesService/cities.service'

@Component({
  selector: 'app-modal-list-cities',
  templateUrl: './modal-list-cities.page.html',
  styleUrls: ['./modal-list-cities.page.scss'],
})
export class ModalListCitiesPage implements OnInit {
  @Input() modalController: ModalController;
  @Input() city: string;
  private cities: Observable<Array<City>>;

  constructor(private citiesService: CitiesService) { }

  ngOnInit() {
    if (this.city.length != 0) {
      this.cities = this.citiesService.getCities().pipe(take(1));
      this.citiesService.findCity(this.city[0].toUpperCase() + this.city.substr(1));
    }
    // else this.dismiss(null);
  }

  dismiss(city: number) {
    let data = null;
    if (city != null) data = {'city': city};
    this.modalController.dismiss(data);
  }
}
