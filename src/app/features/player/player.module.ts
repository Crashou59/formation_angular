import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerDetailsComponent } from './player-details/player-details.component';



@NgModule({
  declarations: [
    PlayerComponent,
    PlayerListComponent,
    PlayerDetailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PlayerComponent
  ]
})
export class PlayerModule { }
