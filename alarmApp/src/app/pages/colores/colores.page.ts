import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase/firebase.service';
import { Image } from 'src/app/clases/foto';

@Component({
  selector: 'app-colores',
  templateUrl: './colores.page.html',
  styleUrls: ['./colores.page.scss'],
})
export class ColoresPage implements OnInit {
  public options = ['rojo', 'azul', 'verde', 'amarillo', 'naranja'];
  public category = 'colores'

  constructor() {
  }

  ngOnInit() {
  }

}
