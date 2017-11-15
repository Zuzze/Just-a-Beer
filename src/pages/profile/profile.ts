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
  userData =  UserData;
  currentUserId = HangoutData[1].id;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.data = this.navParams.get('data');
    //console.log(this.profileData);
    console.log(this.userData);
    console.log(this.currentUserId);
  }
}

//ngOnInit(){
// this.profileData = this.getProfile(this.userData.Id) 
//}

//filterUsers(userData, )