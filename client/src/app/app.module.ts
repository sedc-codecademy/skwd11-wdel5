import { HeaderComponent } from './components/header/header.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    // used for components and directives
    AppComponent,
    HomeComponent,
  ],
  imports: [
    HeaderComponent,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ], // used to import other modules
  providers: [], // used for services and pipes
  bootstrap: [AppComponent],
})
export class AppModule {}
