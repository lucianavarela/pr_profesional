import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase/firebase.service';
import { Image } from 'src/app/clases/foto';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.page.html',
  styleUrls: ['./numeros.page.scss'],
})
export class NumerosPage implements OnInit {
  public options = ['uno', 'dos', 'tres', 'cuatro', 'cinco'];
  public category = 'numeros'

  constructor() {
  }

  ngOnInit() {
  }

}
