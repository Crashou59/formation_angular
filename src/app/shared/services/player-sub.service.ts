import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { Player } from './../../features/player/player.model';

@Injectable({
  providedIn: 'root'
})
export class PlayerSubService {

  private subject: Subject<String> = new Subject<String>();
  $obsPlayer = this.subject.asObservable();

  private subjectAddPlayer: BehaviorSubject<Player> = new BehaviorSubject<Player>(null);
  $obsAddPlayer = this.subjectAddPlayer.asObservable();

  constructor() { }

  selectPlayerName(playerName: String): void {
    this.subject.next(playerName);
  }

  addPlayer(player: Player): void {
    this.subjectAddPlayer.next(player);
  }
}
