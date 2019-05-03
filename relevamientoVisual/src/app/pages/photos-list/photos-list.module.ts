import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PhotosListPage } from './photos-list.page';
import { ImgBoxComponent } from '../../components/img-box/img-box.component';
import { AuthService } from 'src/app/services/auth/auth.service';

const routes: Routes = [
  {
    path: '',
    component: PhotosListPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PhotosListPage, ImgBoxComponent]
})
export class PhotosListPageModule {}
