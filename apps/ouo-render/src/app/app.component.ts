import { Component, Injector } from '@angular/core';
import { customActionEvent } from '@neux/render/renderer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  customActionEvent = customActionEvent;

  constructor(
    private injector: Injector
  ) {

  }
}
