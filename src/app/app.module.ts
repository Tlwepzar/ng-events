import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
  EventsListComponent,
  EventThumbnailComponent,
  EventService,
  CreateEventComponent,
  EventListResolver,
  EventDetailsComponent,
  EventRouteActivator,
  CreateSessionComponent,
  SessionListComponent,
  UpVoteComponent,
  VoterService,
  DurationPipe,
} from './events/index'

import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { 
  JQ_TOKEN, 
  TOASTR_TOKEN, 
  Toastr, 
  CollapsibleWellComponent, 
  SimpleModalComponent, 
  ModalTriggerDirective } from './common/index';
import { appRoutes } from './routes'
import { Error404Component } from './errors/404.component';
import { AuthService } from './events/user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

let toastr:Toastr = window['toastr'];
let jQuery = window['$'];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    NavBarComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    SimpleModalComponent,
    UpVoteComponent,
    ModalTriggerDirective,
    DurationPipe,
  ],
  providers: [
    EventService, 
    { provide: TOASTR_TOKEN, useValue: toastr}, 
    { provide: JQ_TOKEN, useValue: jQuery}, 
    EventRouteActivator,
    VoterService,
    AuthService,
    {
    provide: 'canDeactivateCreateEvent',
    useValue: checkDirtyState
    },
    EventListResolver,
],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component:CreateEventComponent) {
  if (component.isDirty)
    return window.confirm('You have not saved this event, do you really want to cancel?')
  return true
}
