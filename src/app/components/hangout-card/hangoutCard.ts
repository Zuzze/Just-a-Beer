import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Hangout } from '../../../pages/hangout/hangout';

@Component({
  selector: 'hangout-card',
  templateUrl: 'hangoutCard.html'
})

export class HangoutCard {
  constructor(public navCtrl: NavController) {

  }

  handleClick(){
    this.navCtrl.push(Hangout); 
  }
  
}