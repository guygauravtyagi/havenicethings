import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalModule } from './global/global.module';
import { ApiInteractionModule } from './services/api-interaction/api-interaction.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GlobalModule,
    ApiInteractionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
