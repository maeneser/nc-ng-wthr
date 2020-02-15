import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalListCitiesPage } from './modalListCities/modal-list-cities.page';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Output() selectedCity = new EventEmitter<number>();

  constructor(public modalController: ModalController) { }

  ngOnInit() {}

  async presentModal(city: string) {
    let modal = await this.modalController.create({
      component: ModalListCitiesPage,
      componentProps: {
        'modalController': this.modalController,
        'city': city
      }
    });
    await modal.present();
    let { data } = await modal.onWillDismiss();
    if (data != null) this.selectedCity.emit(data.city);
  }

}