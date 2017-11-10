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

    console.log("tab changed");
    console.log(this);
  }

}
