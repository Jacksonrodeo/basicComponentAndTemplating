import {Component} from '@angular/core';

@Component(
  {
  selector: 'app-event',
    templateUrl: './event.component.html',
    styleUrls: ['./event.component.css']
}
)


export class EventComponent {
  title = 'hello, here I am (ez itt a title)';

  constructor() {
    console.log(`${this.title} itt lehet folytatni ...`);
    this.greetings();
  }

  greetings() {
    console.log('Not implemented yet');
  }

}
