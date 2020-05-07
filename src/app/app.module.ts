import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './features/header/header.component';
import { PlayerModule } from './features/player/player.module';
import { LoginModule } from './features/login/login.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PlayerModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
