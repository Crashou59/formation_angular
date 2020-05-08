import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Player } from './player.model';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

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

  constructor() { }

  getPlayers(): Observable<Player[]> {
    console.log('getPlayers', this.players)
    return of(this.players);
  }
}
