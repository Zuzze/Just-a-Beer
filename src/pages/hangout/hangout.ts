import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserData } from '../../assets/data/UserData';
import { Comments } from '../../assets/data/HangoutData';

@Component({
  selector: 'hangout',
  templateUrl: 'hangout.html',
  styles: ['hangout.scss']
})

export class Hangout {
  data: any;
  userData = UserData;
  toTime: String;
  fromTime: String;
  comments: any = [];
  messages: any = [];
  commentData = Comments;
  newComment: String = "";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.data = this.navParams.get('data');
  }

  ngOnInit(){
    this.fromTime = this.data.fromTime.toLocaleString();
    this.toTime = this.data.toTime.toLocaleString();
    this.segmentChanged({commentSection: "comments"});
    this.comments = this.getComments(this.commentData, this.data.commentIds);
    this.messages = this.getComments(this.commentData, this.data.privateMessageIds);
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