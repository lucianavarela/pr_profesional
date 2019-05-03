import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase/firebase.service';
import { Image } from 'src/app/clases/foto';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.page.html',
  styleUrls: ['./photos-list.page.scss'],
})
export class PhotosListPage implements OnInit {
  fotos: Image[];
  usuarios: any[];

  constructor(
    public sfirebase: FirebaseService) {
    this.sfirebase.GetAllImages().subscribe(images => {
      this.fotos = images;
      
      this.sfirebase.GetUsers().subscribe(usuarios => {
        this.usuarios = usuarios;
      });
    });
  }

  ngOnInit() {
  }

}
