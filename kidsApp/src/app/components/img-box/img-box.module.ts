import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ImgBoxComponent } from './img-box.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [ImgBoxComponent],
  exports: [ImgBoxComponent]
})
export class ImgBoxModule { }