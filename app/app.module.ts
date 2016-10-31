import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent }from './components/login/login.component';

@NgModule({
    imports: [
        BrowserModule, 
        FormsModule,
        HttpModule,
        AppRoutingModule],
    declarations: [
        AppComponent,
        LoginComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }