import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AddEventPage } from '../pages/add-event/add-event';
import { NotificationsPage } from '../pages/notifications/notifications';
import { ProfilePage } from '../pages/profile/profile';
import { MeetingsPage } from '../pages/meetings/meetings';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { Hangout } from '../pages/hangout/hangout';
import { HangoutCard } from '../app/components/hangout-card/hangoutCard';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CommentCard } from '../app/components/comment-card/commentCard';

@NgModule({
  declarations: [
    MyApp,
    AddEventPage,
    NotificationsPage,
    HomePage,
    ProfilePage,
    MeetingsPage,
    TabsPage,
    Hangout,
    HangoutCard,
    CommentCard
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AddEventPage,
    NotificationsPage,
    HomePage,
    ProfilePage,
    MeetingsPage,
    TabsPage,
    Hangout
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
