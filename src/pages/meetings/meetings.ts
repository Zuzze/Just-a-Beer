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
  tab = 'joining';

  constructor(public navCtrl: NavController) {

  }

  ngOnInit(){
    const hangoutData = HangoutData;
    const currentUserId = 0;
    this.hostingEvents = this.getHostingEvents(hangoutData, currentUserId);
    this.joiningEvents = this.getJoiningEvents(hangoutData, currentUserId);
    this.pendingEvents = this.getPendingEvents(hangoutData, currentUserId);

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
      joining = hangouts.filter(hangout => hangout.confirmedUsers.includes(userId));
    }
    console.log("JOINING");
    console.log(joining);
    return joining;
  }

  getPendingEvents(hangouts, userId){
    let pending = [];
    if (hangouts.length > 0){
      pending = hangouts.filter(hangout => hangout.pendingUsers.includes(userId));
    }
    console.log("PENDING");
    console.log(pending);
    return pending;
  }

//workaround to bug in ion-segment component
  segmentChanged(segment) {
    if(segment == "hosting"){
      this.tab = 'hosting';
      document.getElementById("joining").hidden = true;
      document.getElementById("pending").hidden = true;
      document.getElementById("hosting").hidden = false;
    } else if(segment == "pending") {
      this.tab = 'pending';
      document.getElementById("joining").hidden = true;
      document.getElementById("pending").hidden = false;
      document.getElementById("hosting").hidden = true;
    } else {
      this.tab = 'joining';
      document.getElementById("joining").hidden = false;
      document.getElementById("pending").hidden = true;
      document.getElementById("hosting").hidden = true;
    }
  }
}
