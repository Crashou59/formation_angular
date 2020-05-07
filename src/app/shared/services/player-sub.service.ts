import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Player } from './../../features/player/player.model';

@Injectable({
  providedIn: 'root'
})
export class PlayerSubService {

  private subject: Subject<String> = new Subject<String>();
  $obsPlayer = this.subject.asObservable();

  constructor() { }

  selectPlayerName(playerName: String) {
    this.subject.next(playerName);
  }
}
