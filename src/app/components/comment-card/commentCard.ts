import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserData } from '../../../assets/data/UserData';
import { ProfilePage } from '../../../pages/profile/profile';

@Component({
    selector: 'comment-card',
    templateUrl: 'commentCard.html',
    styles: ['commentCard.scss']
})

export class CommentCard{
    @Input('content') data: any;
    @Input('user') user: any;
    userData = UserData;
    constructor(public navCtrl: NavController, public navParams: NavParams){

    }

    handleProfileClick(){
        this.navCtrl.push(ProfilePage, {data: this.user});
    }
    
}