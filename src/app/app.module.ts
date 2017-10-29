import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventComponent } from './event/event.component';
import { AlmaComponent } from './alma/alma.component';

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    AlmaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
