import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  events = ['sziget', 'efott', 'fezen', 'szin'];
  show = true;
  klikkeljunke = true;
  inputContent: string;

  toggle() {
    this.show = !this.show;
    this.inputContent = 'jh , hh';
  }

  demo(ev: MouseEvent) {
    console.log(ev.screenX);
  }
}
