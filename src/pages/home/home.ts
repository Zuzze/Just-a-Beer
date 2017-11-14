import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HangoutData } from '../../assets/data/HangoutData';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  hangoutData = HangoutData;
  constructor(public navCtrl: NavController) {
  }
}
