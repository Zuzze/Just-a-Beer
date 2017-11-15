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
  }

  ngOnInit(){
    const hangoutData = HangoutData;
    const currentUserId = 0;
    this.hostingEvents = this.getHostingEvents(hangoutData, currentUserId);
    this.joiningEvents = this.getJoiningEvents(hangoutData, currentUserId);

  }

  getHostingEvents(hangouts, userId){
    let hosted = [];
    if (hangouts.length > 0){
      hosted = hangouts.filter(hangout => hangout.owner === userId);
    }
    console.log("HOSTING");
    console.log(hosted);
    return hosted;
  }

  getJoiningEvents(hangouts, userId){
    let joining = [];
    if (hangouts.length > 0){
      joining = hangouts.filter(hangout => hangout.pendingUsers.includes(userId) || hangout.confirmedUsers.includes(userId));
    }
    console.log("JOINING");
    console.log(joining);
    return joining;
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
