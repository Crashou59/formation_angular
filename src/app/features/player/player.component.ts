import { Component, OnInit } from '@angular/core';
import { Player } from './player.model';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  players: Player[] = [{
    characterName: 'toto',
    name: 'toto',
    class: 'Guerrier',
    race: 'Nain',
    sexe: 'M',
    strength: 12,
    constitution: 11,
    intelligence: 8,
    dexterity: 10
  },
  {
    characterName: 'titi',
    name: 'titi',
    class: 'Rodeur',
    race: 'Elf',
    sexe: 'F',
    strength: 10,
    constitution: 11,
    intelligence: 9,
    dexterity: 13
  },
  {
    characterName: 'tutu',
    name: 'tutu',
    class: 'Mage',
    race: 'Elf',
    sexe: 'M',
    strength: 8,
    constitution: 10,
    intelligence: 13,
    dexterity: 10
  }];

  selected: Player;

  constructor() { }

  ngOnInit(): void {
  }

  selectPlay(index: number): void {
    this.selected = this.players[index];
  }

}
