import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserData } from '../../assets/data/UserData';
import { HangoutData } from '../../assets/data/HangoutData';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  data: any;
  userData = UserData;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.data = this.navParams.get('data');
  }
}

