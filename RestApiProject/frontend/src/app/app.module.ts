import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetstudentsComponent } from './getstudents/getstudents.component';
import { UpdatestudentsComponent } from './updatestudents/updatestudents.component';
import { PoststudentsComponent } from './poststudents/poststudents.component';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule,FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    GetstudentsComponent,
    UpdatestudentsComponent,
    PoststudentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
