import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase/firebase.service';
import { Image } from 'src/app/clases/foto';

@Component({
  selector: 'app-animales',
  templateUrl: './animales.page.html',
  styleUrls: ['./animales.page.scss'],
})
export class AnimalesPage implements OnInit {
  public options = ['vaca', 'mariposa', 'gato', 'perro', 'conejo'];
  public category = 'animales'

  constructor() {
  }

  ngOnInit() {
  }

}
