import { HeaderComponent } from './components/header/header.component'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HomeComponent } from './components/home/home.component'
import { HttpClientModule } from '@angular/common/http'
import { MatSnackBarModule } from '@angular/material/snack-bar'

@NgModule({
    declarations: [
        // used for components (NOT STANDALONE) and directives only
        AppComponent,
    ],
    imports: [
        // used to import other modules and (STANDALONE) components
        HeaderComponent,
        HomeComponent,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatSnackBarModule,
    ],
    providers: [
        // used for services and pipes
    ],
    bootstrap: [AppComponent], // used for the root component, which is the first component that loads in the app
})
export class AppModule {}
