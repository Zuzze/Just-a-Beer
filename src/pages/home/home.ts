import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Hangout } from '../hangout/hangout';
import { HangoutCard } from '../../app/components/hangout-card/hangoutCard';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {

  }

}
