import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

declare var DateRangePicker: any;
declare var Datepicker: any;

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.scss'],

  // selector: 'app-sliding-div',DateRangePicker
  //selector: 'app-test2',

  animations: [
    trigger('slideInOut', [
      state(
        'hidden',
        style({
          transform: 'translateY(100%)',
        }),
      ),
      state(
        'visible',
        style({
          transform: 'translateY(0)',
        }),
      ),
      transition('hidden => visible', animate('300ms ease-in')),
      transition('visible => hidden', animate('300ms ease-out')),
    ]),
  ],
})
export class Test2Component {
  isVisible = false;

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }

  ngOnInit() {
    console.log(Datepicker);
    // const dateRangePickerEl = document.getElementById('date-range-picker');
    // new DateRangePicker(dateRangePickerEl, {
    //   pickLevel: 2,
    // });
  }
}
