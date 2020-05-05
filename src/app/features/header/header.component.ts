import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


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

  constructor() { }

  ngOnInit(): void {
  }

  changeNickname() {
    console.log('click');
    this.changeEvent.emit('titi');
  }

}
