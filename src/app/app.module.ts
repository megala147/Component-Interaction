import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './componentinteraction/main/main.component';
import { ClientComponent } from './componentinteraction/client/client.component';
import { ServerComponent } from './componentinteraction/server/server.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, MainComponent, ClientComponent, ServerComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
