// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameSixComponent } from './game-six/game-six.component';
import { GameTwelveComponent } from './game-twelve/game-twelve.component';
import { AppComponent } from './app.component';

import { GameSelectorComponent } from './game-selector/game-selector.component';

const routes: Routes = [
  { path: '', component: GameSelectorComponent },
  { path: 'game/6', component: GameSixComponent },
  { path: 'game/12', component: GameTwelveComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}



