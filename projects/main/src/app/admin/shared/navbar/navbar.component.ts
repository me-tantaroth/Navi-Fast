import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [NgbDropdownConfig],
})
export class NavbarComponent implements OnInit {
  public iconOnlyToggled = false;
  public sidebarToggled = false;

  constructor(
    config: NgbDropdownConfig,
    translate: TranslateService,
    @Inject(DOCUMENT) private document: Document
  ) {
    config.placement = 'bottom-right';
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');
  }

  ngOnInit() {}

  // toggle sidebar in small devices
  toggleOffcanvas() {
    this.document.querySelector('.sidebar-offcanvas')?.classList.toggle('active');
  }

  // toggle sidebar
  toggleSidebar() {
    let body = this.document.querySelector('body');
    if (
      !body?.classList.contains('sidebar-toggle-display') &&
      !body?.classList.contains('sidebar-absolute')
    ) {
      this.iconOnlyToggled = !this.iconOnlyToggled;
      if (this.iconOnlyToggled) {
        body?.classList.add('sidebar-icon-only');
      } else {
        body?.classList.remove('sidebar-icon-only');
      }
    } else {
      this.sidebarToggled = !this.sidebarToggled;
      if (this.sidebarToggled) {
        body.classList.add('sidebar-hidden');
      } else {
        body.classList.remove('sidebar-hidden');
      }
    }
  }

  // toggle right sidebar
  toggleRightSidebar() {
    this.document.querySelector('#right-sidebar')?.classList.toggle('open');
  }
}
