import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
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
      for(var h = 0; h < hangouts.length; h++){
        console.log(hangouts[h].owner);
        if(hangouts[h].owner === userId){
          hosted.push(hangouts[h]);
        }
      }
    }
    console.log("HOSTING");
    console.log(hosted);
    return hosted;
  }

  getJoiningEvents(hangouts, userId){
    let joining = [];
    if (hangouts.length > 0){
      for(var h = 0; h < hangouts.length; h++){
        if(hangouts[h].pendingUsers.includes(userId) || hangouts[h].confirmedUsers.includes(userId)){
          joining.push(hangouts[h]);
        }
      }
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
