import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-greeter',
  templateUrl: 'greeter.component.html'
})
export class GreeterComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
    console.log('GreeterComponent Init');
  }
}
