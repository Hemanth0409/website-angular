import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardModule } from 'primeng/card';
import { TimelineModule } from 'primeng/timeline';
import {MenuModule} from 'primeng/menu';
import { CarouselComponent } from './carousel/carousel.component';
import {DataViewModule} from 'primeng/dataview';
import { DataviewComponent } from './dataview/dataview.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    DataviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     BrowserAnimationsModule,
    ButtonModule,
    SidebarModule,
    CardModule,
    TimelineModule,
    MenuModule,
    DataViewModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
