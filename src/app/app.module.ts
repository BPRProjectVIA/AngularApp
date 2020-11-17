import { BrowserModule } from '@angular/platform-browser';
import { Injectable, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VariablesComponent } from './variables/variables.component';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

@NgModule({
  declarations: [
    AppComponent,
    VariablesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
