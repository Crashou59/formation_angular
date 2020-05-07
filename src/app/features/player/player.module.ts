import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerDetailsComponent } from './player-details/player-details.component';
import { SexPipe } from 'src/app/shared/pipes/sex.pipe';



@NgModule({
  declarations: [
    PlayerComponent,
    PlayerListComponent,
    PlayerDetailsComponent,
    SexPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PlayerComponent
  ]
})
export class PlayerModule { }
