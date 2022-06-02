import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WarnningAltertComponent } from './warnning-altert/warnning-altert.component';
import { SuccessAltertComponent } from './success-altert/success-altert.component';

@NgModule({
  declarations: [
    AppComponent,
    WarnningAltertComponent,
    SuccessAltertComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
