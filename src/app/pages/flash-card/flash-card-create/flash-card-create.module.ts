import { NgModule } from '@angular/core';
import { FlashCardCreateComponent } from './flash-card-create.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModules } from 'src/app/material.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [FlashCardCreateComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    AppMaterialModules,
    ReactiveFormsModule,
  ],
  exports: [FlashCardCreateComponent]

})
export class FlashCardCreateModule {


}
