import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Hangout } from '../../../pages/hangout/hangout';
import { UserData } from '../../../assets/data/UserData';

@Component({
  selector: 'hangout-card',
  templateUrl: 'hangoutCard.html'
})

export class HangoutCard {
@Input('hangout') data: any;
userData = UserData;
toTime: String;
fromTime: String;
  
  constructor(public navCtrl: NavController) {

  }

  ngOnInit(){
    this.fromTime = this.data.fromTime.toLocaleString();
    this.toTime = this.data.toTime.toLocaleString();
  }

  handleClick(){
    this.navCtrl.push(Hangout, this.data); 
  }
  
}