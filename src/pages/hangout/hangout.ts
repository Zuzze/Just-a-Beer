import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserData } from '../../assets/data/UserData';

@Component({
  selector: 'hangout',
  templateUrl: 'hangout.html'
})

export class Hangout {
  data: any;
  userData = UserData;
  toTime: String;
  fromTime: String;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.data = this.navParams.get('data');
  }

  ngOnInit(){
    this.fromTime = this.data.fromTime.toLocaleString();
    this.toTime = this.data.toTime.toLocaleString();
    this.segmentChanged({commentSection: "comments"});
  }

  segmentChanged(segment) {
    let tab = "comments"
    if(segment.commentSection){
      tab = segment.commentSection;//default page
    }
    if(tab == "comments"){
      document.getElementById("comments").hidden = false;
      document.getElementById("messages").hidden = true;
    } else {
      document.getElementById("comments").hidden = true;
      document.getElementById("messages").hidden = false;
    }
  }
  
}