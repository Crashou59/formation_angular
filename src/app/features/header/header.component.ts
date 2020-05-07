import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PlayerSubService } from 'src/app/shared/services/player-sub.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input()
  nickname = '';

  @Output()
  changeEvent = new EventEmitter();

  constructor(private playerSubService: PlayerSubService) {

  }

  ngOnInit(): void {
    this.playerSubService.$obsPlayer.subscribe((name: string) =>
      this.nickname = name);
  }

  changeNickname() {
    console.log('click');
    this.changeEvent.emit('titi');
  }

}
