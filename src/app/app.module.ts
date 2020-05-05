import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './features/header/header.component';
import { PlayerComponent } from './features/player/player.component';
import { PlayerListComponent } from './features/player/player-list/player-list.component';
import { PlayerDetailsComponent } from './features/player/player-details/player-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PlayerComponent,
    PlayerListComponent,
    PlayerDetailsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
