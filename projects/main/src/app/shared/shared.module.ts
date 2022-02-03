import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AlertComponent } from './components/alert/alert.component';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LayoutComponent } from './layout/layout.component';




@NgModule({
  declarations: [
    LoaderComponent,
    HeaderComponent,
    NavbarComponent,
    AlertComponent,
   
    SidebarComponent,
    LayoutComponent,
    
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    SidebarComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
