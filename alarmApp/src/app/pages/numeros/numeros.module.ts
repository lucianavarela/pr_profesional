import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { NumerosPage } from './numeros.page';
import { ImgBoxModule } from 'src/app/components/img-box/img-box.module';

const routes: Routes = [
  {
    path: '',
    component: NumerosPage
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
  declarations: [NumerosPage]
})
export class NumerosPageModule {}
