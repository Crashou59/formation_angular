import { Component, OnInit, Input } from '@angular/core';
import { Player } from './../player.model';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.css']
})
export class PlayerDetailsComponent implements OnInit {

  @Input()
  selected: Player;

  constructor() { }

  ngOnInit(): void {
  }

}
