import { Component, OnInit, OnDestroy } from '@angular/core';
import { Player } from './player.model';
import { PlayerService } from './player.service';
import { PlayerSubService } from 'src/app/shared/services/player-sub.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit, OnDestroy {

  players: Player[] = [];

  selected: Player;

  private subscription: Subscription;

  constructor(private playerService: PlayerService, private playerSubService: PlayerSubService) { }

  ngOnInit(): void {
    this.playerService.getPlayers().subscribe(
      (players) => this.players = players);
    this.subscription = this.playerSubService.$obsAddPlayer.subscribe(
      (player) => {
        if (player !== null && !this.players.find(p => p.characterName === player.characterName)) {
          this.players.push(player);
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  selectPlay(index: number): void {
    this.selected = this.players[index];
    this.playerSubService.selectPlayerName(this.selected.characterName);
  }

}
