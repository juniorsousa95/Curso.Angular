import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { FriendRequestComponent } from './friend-request/friend-request.component';
import { UpcomingEventsComponent } from './upcoming-events/upcoming-events.component';
import { CoresComponent } from './cores/cores.component';
import { CorAtualComponent } from './cores/cor-atual/cor-atual.component';
import { ProfileListComponent } from './profile-list/profile-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    DashboardComponent,
    ProfileComponent,
    FriendRequestComponent,
    UpcomingEventsComponent,
    CoresComponent,
    CorAtualComponent,
    ProfileListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
