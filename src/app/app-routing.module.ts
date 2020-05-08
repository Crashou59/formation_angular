import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { PlayerComponent } from './features/player/player.component';
import { SubscribePlayerComponent } from './features/subscribe-player/subscribe-player.component';
import { GuardGuard } from './core/guard.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/players',
    pathMatch: 'full'
  }
  ,
  {
    path: 'players',
    component: PlayerComponent
  },
  {
    path: 'inscription',
    component: SubscribePlayerComponent,
    canActivate: [GuardGuard]
  },
  {
    path: '**',
    redirectTo: '/players',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
