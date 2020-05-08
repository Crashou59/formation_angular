import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerComponent } from './features/player/player.component';
import { SubscribePlayerComponent } from './features/subscribe-player/subscribe-player.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/inscription',
    pathMatch: 'full'
  }
  ,
  {
    path: 'players',
    component: PlayerComponent
  },
  {
    path: 'inscription',
    component: SubscribePlayerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
