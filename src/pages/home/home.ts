import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Hangout } from '../hangout/hangout';
import { HangoutCard } from '../../app/components/hangout-card/hangoutCard';
import { HangoutData, Comments } from '../../assets/data/HangoutData';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  hangoutData = HangoutData;
  constructor(public navCtrl: NavController) {

  }

}
