import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ErrorInterceptor } from './core/error-interceptor';
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
  ],
  providers: [{provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
