import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-meetings',
  templateUrl: 'meetings.html'
})
export class MeetingsPage {

  constructor(public navCtrl: NavController) {

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
