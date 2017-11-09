import { Component } from '@angular/core';

import { MeetingsPage } from '../meetings/meetings';
import { NotificationsPage } from '../notifications/notifications';
import { HomePage } from '../home/home';
import { ProfilePage } from '../profile/profile';
import { AddEventPage } from '../add-event/add-event';
import { MeetingsPage } from '../meetings/meetings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MeetingsPage;
  tab3Root = AddEventPage;
  tab4Root = NotificationsPage;
  tab5Root = ProfilePage;

  constructor() {

  }
}
