import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formation-app';
  nickname = 'toto';

  changeNickname(nickname: string) {
    this.nickname = nickname;
  }
}
