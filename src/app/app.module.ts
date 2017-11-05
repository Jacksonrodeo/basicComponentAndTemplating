import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventComponent } from './event/event.component';
import { AlmaComponent } from './alma/alma.component';
import {FormsModule} from '@angular/forms';
import { ListdemoComponent } from './listdemo/listdemo.component';
import { MypipePipe } from './listdemo/mypipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    AlmaComponent,
    ListdemoComponent,
    MypipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
