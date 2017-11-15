import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
    selector: 'comment-card',
    templateUrl: 'commentCard.html',
    styles: ['commentCard.scss']
})

export class CommentCard{
    @Input('content') data: any;
    @Input('user') user: any;

    constructor(public navCtrl: NavController, public navParams: NavParams){

    }
}