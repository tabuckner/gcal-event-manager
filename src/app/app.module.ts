import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { CoreModule } from './core/core.module';
import { LayoutModule } from './layout/layout.module';
import { HomeModule } from './home/home.module';
import { NewEventModule } from './new-event/new-event.module';
import { MatNativeDateModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production }),
    MatNativeDateModule,
    CoreModule.forRoot(),
    LayoutModule,
    HomeModule,
    NewEventModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
