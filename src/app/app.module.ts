import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModules } from './material.module';
import { AppRoutingModule } from './app.routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FlashCardModule } from './pages/flash-card/flash-card-view/flash-card-view.module';
import { FlashCardCreateModule } from './pages/flash-card/flash-card-create/flash-card-create.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CommonModule,
    AppRoutingModule,
    AppMaterialModules,
    FlashCardModule,
    FlashCardCreateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
