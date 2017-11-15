import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';


@Component({
  selector: 'page-add-event',
  templateUrl: 'add-event.html'
})
export class AddEventPage {

  constructor(public navCtrl: NavController) {

  }

  handleClick() {
    this.navCtrl.parent.select(0);
  }
}
