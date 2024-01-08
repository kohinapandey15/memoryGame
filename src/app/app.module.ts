// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { GameSelectorComponent } from './game-selector/game-selector.component';
import { GameSixComponent } from './game-six/game-six.component';
import { GameTwelveComponent } from './game-twelve/game-twelve.component';
import { Router, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
 
    GameSelectorComponent,
    GameSixComponent,
    GameTwelveComponent,
    HeaderComponent
  
    
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
