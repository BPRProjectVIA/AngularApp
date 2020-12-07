import { BrowserModule } from '@angular/platform-browser';
import { Injectable, NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VariablesComponent } from './variables/variables.component';
import { HttpClientModule } from '@angular/common/http';
import { VariablesModule } from './variables/variables.module';


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
    AppRoutingModule,
    MatCardModule
  ],
  exports: [
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
