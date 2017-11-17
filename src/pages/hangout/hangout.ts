import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserData, CurrentUser } from '../../assets/data/UserData';
import { Comments } from '../../assets/data/HangoutData';
import { ProfilePage } from '../../pages/profile/profile';

const statusTypes = ["Owner", "Confirmed", "Pending", "None"];

@Component({
  selector: 'hangout',
  templateUrl: 'hangout.html',
  styles: ['hangout.scss']
})

export class Hangout {
  data: any;
  tab = 'comments';
  userData = UserData;
  toTime: String;
  fromTime: String;
  date: String;
  comments: any = [];
  messages: any = [];
  commentData = Comments;
  newComment: String = "";
  participants: String;
  status: String;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.data = this.navParams.get('data');
  }

ngOnInit(){
    let today = new Date();
    if(this.data.fromTime.getDate() === today.getDate()){
      this.date = "TODAY";
    } else {
      this.date = this.data.fromTime.getDate().toLocaleString() + "/" + this.data.fromTime.getMonth().toLocaleString();
    }
    this.fromTime = this.data.fromTime.getHours().toLocaleString();
    this.toTime = this.data.toTime.getHours().toLocaleString();
    this.segmentChanged({commentSection: "comments"});
    this.comments = this.getComments(this.commentData, this.data.commentIds);
    this.messages = this.getComments(this.commentData, this.data.privateMessageIds);
    this.status = this.data.owner === CurrentUser
                    ? statusTypes[0]
                    : this.data.confirmedUsers.filter( c => c === CurrentUser).length == 1
                    ? statusTypes[1]
                    : this.data.pendingUsers.filter( c => c === CurrentUser).length == 1
                    ? statusTypes[2]
                    : statusTypes[3];
  }

  getComments(commentData, commentIds){
    if (commentIds.length > 0){
      return commentIds.reduce( (res, currentId) => {
        return res.concat(commentData.filter( c => {
          return c.id === currentId
        }));
      }, []);
    }
    else return [];
  }

  setComment(val){
    this.newComment = val;
    console.log(this.newComment);
  }

  addComment(){
    console.log(this.newComment);
  }

  segmentChanged(segment) {
    console.log(segment);
    if(segment == "messages"){
      this.tab = "messages";
      document.getElementById("comments").hidden = true;
      document.getElementById("messages").hidden = false;
    } else {
      //also default
      this.tab = 'comments';
      document.getElementById("comments").hidden = false;
      document.getElementById("messages").hidden = true;
    }
  }

  handleProfileClick(u){
    this.navCtrl.push(ProfilePage, {data: this.userData[u]});
  }

  handleStateChange(prevStatus){
    this.status = prevStatus == "None"
                    ? "Pending"
                    : "None";
  }

}
