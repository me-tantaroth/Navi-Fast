import { Component, OnInit } from '@angular/core';
import UIkit from 'uikit';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  title = 'main';

  constructor() {}

  ngOnInit(): void {
    // components can be called from the imported UIkit reference
    UIkit.notification('Hello world.');
  }
}
