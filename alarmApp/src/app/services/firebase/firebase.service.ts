import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import * as firebase from 'firebase/app';
import { Image } from '../../clases/foto';
import { User } from 'src/app/clases/usuario';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  imagesRef: AngularFireList<Image>;
  usersRef: AngularFireList<User>;

  constructor(private db: AngularFireDatabase) {
    this.imagesRef = db.list('fotos');
    this.usersRef = db.list('usuarios');
  }

  saveImage(image: Image) {
    return this.imagesRef.push(image);
  }
  updateItem(key: string, image: Image) {
    return this.imagesRef.update(key, image);
  }
  deleteItem(key: string) {
    return this.imagesRef.remove(key);
  }
  deleteEverything() {
    return this.imagesRef.remove();
  }

  GetImages() {
    return this.imagesRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
  }

  GetUsers() {
    return this.usersRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
  }

  GetAllImagesByType(tipo: string) {
    return this.GetImages().pipe(
      map(images => {
        return images.filter(image => {
          switch (tipo) {
            case 'lindas':
              return image['cualidad'] == 'linda';
            case 'fea':
              return image['cualidad'] == 'ƒea';
          }
        });
      })
    );
  }

  GetAllImages() {
    return this.GetImages().pipe(
      map(images => {
        return images.sort(function (obj1: Image, obj2: Image) {
          return new Date(obj2.fecha).getTime() - new Date(obj1.fecha).getTime();
        });;
      })
    );
  }
}
