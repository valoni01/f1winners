import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FWorldService } from './f-world.service';
import { RaceListComponent } from './race-list/race-list.component';
import { WinnerListComponent } from './winner-list/winner-list.component';

@NgModule({
  declarations: [
    AppComponent,
    RaceListComponent,
    WinnerListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
