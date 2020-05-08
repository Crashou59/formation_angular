import { Component, OnInit } from '@angular/core';
import { Player } from './player.model';
import { PlayerService } from './player.service';
import { PlayerSubService } from 'src/app/shared/services/player-sub.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  players: Player[] = [];

  selected: Player;

  constructor(private playerService: PlayerService, private playerSubService: PlayerSubService) { }

  ngOnInit(): void {
    this.playerService.getPlayers().subscribe(
      (players) => this.players = players)
    this.playerSubService.$obsAddPlayer.subscribe(
      (player) => this.players.push(player)
    );
  }

  selectPlay(index: number): void {
    this.selected = this.players[index];
    this.playerSubService.selectPlayerName(this.selected.characterName);
  }

}
