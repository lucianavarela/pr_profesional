import { Component, OnInit, Input } from '@angular/core';
import * as firebase from 'firebase/app';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Image } from 'src/app/clases/foto';

@Component({
  selector: 'app-img-box',
  templateUrl: './img-box.component.html',
  styleUrls: ['./img-box.component.scss'],
})
export class ImgBoxComponent implements OnInit {
  @Input() foto: Image;
  public path: string = '';

  constructor(private fservice: FirebaseService) {
  }

  ngOnInit() {
    this.setUpInfo();
  }

  setUpInfo() {
    let storageRef = firebase.storage().ref();
    let spaceRef = storageRef.child('images/' + this.foto.ruta).fullPath;
    let that = this;

    storageRef.child(spaceRef).getDownloadURL()
      .then(function (url) {
        that.updatePath(url);
      }).catch(function (error) {
        console.log(error);
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
