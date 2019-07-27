import { routing, appRoutingProviders } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StorageServiceModule } from 'angular-webstorage-service';

import { AppComponent } from './app.component';

import { LoginComponent } from './components/login.component';
import { HomeComponent } from './components/home.component';
import { WelcomeComponent } from './components/welcome.component';
import { BillingComponent } from './components/billing.component';
import { MeansComponent } from './components/means.component';
import { RolesComponent } from './components/roles.component';
import { UserComponent } from './components/users.component';

import { Error404Component } from './components/error404.component';
import {MeansService} from "./services/means.service";
import {RolesService} from "./services/roles.service";
import {UserService} from "./services/users.service";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    WelcomeComponent,
    BillingComponent,
    MeansComponent,
    RolesComponent,
    UserComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule,
    StorageServiceModule 
  ],

  providers: [
  	appRoutingProviders,MeansService,RolesService,UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
