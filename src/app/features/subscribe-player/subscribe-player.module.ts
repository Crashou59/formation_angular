import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscribePlayerComponent } from './subscribe-player.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [SubscribePlayerComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    SubscribePlayerComponent
  ]

})
export class SubscribePlayerModule { }
