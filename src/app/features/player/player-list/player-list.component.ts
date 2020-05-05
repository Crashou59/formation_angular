import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Player } from './../player.model';


@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

  @Input()
  players: Player[];

  @Output()
  onSelect: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  selectPlay(index: number): void {
    this.onSelect.emit(index);
  }

}
