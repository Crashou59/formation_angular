import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { PlayerSubService } from 'src/app/shared/services/player-sub.service';

@Component({
  selector: 'app-subscribe-player',
  templateUrl: './subscribe-player.component.html',
  styleUrls: ['./subscribe-player.component.css']
})
export class SubscribePlayerComponent implements OnInit {

  subPlayerForm = this.fb.group({
    characterName: ['', Validators.required],
    name: ['', Validators.required],
    class: ['', Validators.required],
    race: ['', Validators.required]
  });


  constructor(private fb: FormBuilder, private playerSubService: PlayerSubService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.subPlayerForm.valid) {
      console.log('ok');
      this.playerSubService.addPlayer(this.subPlayerForm.value);
    }
    else {
      console.log('pas ok');
    }
  }

}
