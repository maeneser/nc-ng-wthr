import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  private cities = new Array<number>();

  constructor(public toastController: ToastController) {}

  ngOnInit() {}

  async addCity(city: number) {
    let i = this.cities.indexOf(city);
    if (i == -1) this.cities.push(city);
    else {
      let toast = await this.toastController.create({
        message: 'This city is already showed',
        duration: 5000
      });
      toast.present();
    }
  }

  deleteCity(city: number) {
    let i = this.cities.indexOf(city);
    if(i != -1)
      this.cities.splice(i, 1);
  }
}