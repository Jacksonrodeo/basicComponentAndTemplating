import {Component} from '@angular/core';
import {EventModel} from './event-model';


@Component({
  selector: 'app-listdemo',
  templateUrl: './listdemo.component.html',
  styleUrls: ['./listdemo.component.css']
})
export class ListdemoComponent {

  events: EventModel[];

  constructor() {
    this.events =
      [
        {
          id: 1,
          name: 'sziget',
          pic: '../assets/sziget.png'
        },
        {
          id: 2,
          name: 'fezen',
          pic: 'http://www.fezenklub.hu/_user/browser/Image/2016_17/FEZEN_2017_WHITE%20(1).jpg'
        },
        {
          id: 3,
          name: 'rockmaraton',
          pic: 'https://www.tixa.hu/kepek/0003/3018-1.jpg'
        }
      ];

    console.log('megjött');
    const puf = this.events.reduce((x: EventModel, y: EventModel) => {
        return x.id > y.id ? x : y;
        // if (x.id > y.id)
        // {
        //   return x;
        // }
        // else
        // {
        //   return y;
        // }
      }
      ).id
    ;
    console.log(puf);
  }

  delete(id: number) {
    // filter
    this.events = this.events.filter((ev: EventModel) => ev.id !== id);
  }

  add(newEventNameInput: HTMLInputElement) {
    const maxId = this.events.reduce((x, y) => x.id > y.id ? x : y).id;
    const newId = maxId + 1;
    console.log('newId: ' + newId);
    this.events = [
      ...this.events, new EventModel(newId, newEventNameInput.value, '')
    ];

    console.log(newEventNameInput.value);
    newEventNameInput.value = '';
  }
}
