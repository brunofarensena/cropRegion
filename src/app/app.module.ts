import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './routing/app-routing.module';
import { MapsComponent } from './components/maps/maps.component';
import { AgmCoreModule } from '@agm/core';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    MapsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCfcWpfleGUAD_OmbIxQ-qgUAakln2oGYA'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
