import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HangoutData } from '../../assets/data/HangoutData';
import { UserData } from '../../assets/data/UserData';

@Component({
  selector: 'page-meetings',
  templateUrl: 'meetings.html'
})
export class MeetingsPage {
  joiningEvents = HangoutData;
  hostingEvents = HangoutData;
  userData = UserData;
  constructor(public navCtrl: NavController) {
    const currentUserId = HangoutData[0].id;
    console.log(currentUserId);
    console.log(HangoutData);
    this.joiningEvents = HangoutData;
    this.hostingEvents = HangoutData.filter(hangout => hangout.owner == currentUserId);
    console.log(this.joiningEvents);
    console.log(this.hostingEvents);
  }

//workaround to bug in ion-segment component
  segmentChanged(segment) {
    let tab = "joining"
    if(segment.hangouts){
      tab = segment.hangouts;//default page
    }
    if(tab == "joining"){
      document.getElementById("joining").hidden = false;
      document.getElementById("hosting").hidden = true;
    } else {
      document.getElementById("joining").hidden = true;
      document.getElementById("hosting").hidden = false;
    }
  }
}
