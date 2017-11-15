import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CurrentUser, UserData } from '../../assets/data/UserData';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})

export class ProfilePage {
data : any;
isCurrentUser: boolean = true;

constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.data = this.navParams.get('data') ? this.navParams.get('data') : UserData[CurrentUser];
  this.isCurrentUser = this.data.id === CurrentUser;
}
}
