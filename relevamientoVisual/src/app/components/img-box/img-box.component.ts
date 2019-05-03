import { Component, OnInit, Input } from '@angular/core';
import * as firebase from 'firebase/app';
import { FirebaseService } from '../../services/firebase/firebase.service';
import { Image } from 'src/app/clases/foto';
import { User } from 'src/app/clases/usuario';
import { AlertService } from 'src/app/services/alert/alert.service';

@Component({
  selector: 'app-img-box',
  templateUrl: './img-box.component.html',
  styleUrls: ['./img-box.component.scss'],
})
export class ImgBoxComponent implements OnInit {
  @Input() foto: Image;
  @Input() usuarios: User[];
  public path: string = '';
  public nombre: string = '';
  public fecha: Date;
  
  constructor(private fservice: FirebaseService, public alertService: AlertService) {
  }
  
  ngOnInit() {
    this.setUpInfo();
    this.fecha = new Date(this.foto.fecha);
    let creador = this.foto.creador;
    this.nombre = this.usuarios.filter(function(e){return e.auth_id==creador})[0].nombre;
  }

  setUpInfo() {
    let storageRef = firebase.storage().ref();
    let spaceRef = storageRef.child('images/' + this.foto.ruta).fullPath;
    let that = this;

    storageRef.child(spaceRef).getDownloadURL()
      .then(function (url) {
        that.updatePath(url);
      }).catch(function (error) {
        that.alertService.create(error);
      })
  }

  updatePath(url) {
    this.path = url;
  }

  vote(type: string) {
    switch (type) {
      case 'up':
        this.foto.votos = this.foto.votos += 1;
        break;
      case 'down':
        this.foto.votos = this.foto.votos -= 1;
        break;
      default:
        break;
    }
    this.fservice.updateItem(this.foto.key,this.foto);
  }
}
