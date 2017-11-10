import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-meetings',
  templateUrl: 'meetings.html'
})
export class MeetingsPage {

  constructor(public navCtrl: NavController) {

  }

  segmentChanged() {
    console.log(this.hangouts);
    if(this.hangouts == "joining"){
      document.getElementById("joining").hidden = false;
      document.getElementById("hosting").hidden = true;
    } else {
      document.getElementById("joining").hidden = true;
      document.getElementById("hosting").hidden = false;
    }
  }

}
