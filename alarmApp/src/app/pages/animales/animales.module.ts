import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AnimalesPage } from './animales.page';
import { ImgBoxModule } from 'src/app/components/img-box/img-box.module';

const routes: Routes = [
  {
    path: '',
    component: AnimalesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ImgBoxModule
  ],
  declarations: [AnimalesPage]
})
export class AnimalesPageModule {}
