import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ColoresPage } from './colores.page';
import { ImgBoxModule } from 'src/app/components/img-box/img-box.module';

const routes: Routes = [
  {
    path: '',
    component: ColoresPage
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
  declarations: [ColoresPage]
})
export class ColoresPageModule {}
