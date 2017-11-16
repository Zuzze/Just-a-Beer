import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserData } from '../../assets/data/UserData';
import { HangoutData } from '../../assets/data/HangoutData';
import { EventTypes } from '../../assets/data/HangoutData';

@Component({
  selector: 'page-add-event',
  templateUrl: 'add-event.html'
})
export class AddEventPage {
  title:string;
  description: string;
  date: String;
  startTime: String;
  endTime: String;
  location: string;
  type: string;
  constructor(public navCtrl: NavController) {
    let now = new Date();
    this.date = now.getDate()+" "+now.getMonth()+" "+now.getFullYear();
    this.startTime = now.getHours()+" "+now.getMinutes();
    this.endTime = now.getHours()+" "+now.getMinutes();
  }

  handleClick() {
    let typeid = 0;
    let t = this;
    EventTypes.forEach(function(el,id,bs) {
      if(t.type == el) typeid=id;
    });
    HangoutData.splice(0,0,{
        id: 1,
        fromTime: new Date(this.date+' '+this.startTime),
        toTime: new Date(this.date+' '+this.endTime),
        description: this.description,
        place: this.location,
        type: EventTypes[typeid],
        owner: UserData[0].id,
        pendingUsers: [],
        confirmedUsers: [],
        rejectedUsers: [],
        commentIds: [],
        privateMessageIds: [],
    });

    this.navCtrl.parent.select(0);
  }

  cancelCreateEvent() {
    this.navCtrl.parent.select(0);
  }
}
