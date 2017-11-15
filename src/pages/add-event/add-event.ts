import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { UserData } from '../../assets/data/UserData';
import { HangoutData } from '../../assets/data/HangoutData';
import { EventTypes } from '../../assets/data/HangoutData';

@Component({
  selector: 'page-add-event',
  templateUrl: 'add-event.html'
})
export class AddEventPage {
  title:string;
  description
  date: Date;
  startTime: Date;
  endTime: Date;
  location: string;
  type: string;
  constructor(public navCtrl: NavController) {

  }

  handleClick() {
    console.log(this.date);
    HangoutData.splice(0,0,{
        id: 1,
        fromTime: new Date(this.date+' '+this.startTime),
        toTime: new Date(this.date+' '+this.endTime),
        description: this.description,
        place: this.location,
        types: [EventTypes[0], EventTypes[1]],
        owner: UserData[0].id,
        pendingUsers: [],
        confirmedUsers: [],
        rejectedUsers: [],
        commentIds: [],
        privateMessageIds: [],
    });

    this.navCtrl.parent.select(0);
  }
}
