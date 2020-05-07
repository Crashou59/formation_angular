import { Component, OnInit } from '@angular/core';
import { Player } from './player.model';
import { PlayerService } from './player.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  players: Player[] = [];

  selected: Player;

  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
    this.playerService.getPlayers().subscribe(
      (players) => this.players = players)
  }

  selectPlay(index: number): void {
    this.selected = this.players[index];
  }

}
