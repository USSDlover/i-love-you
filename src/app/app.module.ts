import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RainComponent } from './rain/rain.component';
import { HeartComponent } from './heart/heart.component';
import { SoundsComponent } from './sounds/sounds.component';

@NgModule({
  declarations: [
    AppComponent,
    RainComponent,
    HeartComponent,
    SoundsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
