import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import * as firebase from 'firebase/app';
import { Image } from '../clases/foto';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  imagesRef: AngularFireList<Image>;

  constructor(private db: AngularFireDatabase) {
    this.imagesRef = db.list('fotos');
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
        return images.sort(function (obj1:Image, obj2:Image) {
          return new Date(obj2.fecha).getTime() - new Date(obj1.fecha).getTime();
        });;
      })
    );
  }

  GetImagesByUser(uid: String, tipo: string) {
    return this.GetAllImagesByType(tipo).pipe(
      map(images => {
        return images.filter(image => {
          return image['creador'] === uid;
        });
      })
    );
  }
  createFoto(title, cualidad) {
    return new Promise<any>((resolve, reject) => {
      firebase.firestore().collection('fotos').add({
        ruta: title,
        creador: firebase.auth().currentUser.uid,
        fecha: Date.now(),
        votos: 0,
        cualidad: cualidad
      })
        .then(
          res => resolve(res),
          err => reject(err)
        )
    })
  }
}




/*import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { FirebaseDatabase, FirebaseStorage, FirebaseFirestore } from 'angularfire2';
import { Observable } from 'rxjs';
import { AngularFireList, AngularFireDatabase } from "angularfire2/database";
import { map } from 'rxjs/operators';

class Usuario {
  auth_id: string;
  correo: string;
  id: number;
  nombre: string;
  perfil: string;
  sexo: string;
}

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  public information: any;
  public firestore: FirebaseFirestore;
  usuarioListRef: AngularFireList<Usuario>;
  usuarioList: Observable<Usuario[]>;

  constructor(public afAuth: AngularFireAuth,
    public database: AngularFireDatabase) {
  }

  unsubscribeOnLogOut() {
  }

  getUsers() {
    console.log('1');
    this.usuarioListRef = this.database.list('usuarios',
      ref => ref.orderByChild('fecha'));

    console.log('2');
    this.usuarioList = this.usuarioListRef.snapshotChanges().
      .map(
        changes => {
          console.log(changes);
          return changes.map(c => ({
            key: c.payload.key, ...c.payload.val()
          }))
        }
      );

  }

  getFotos() {
    return new Promise<any>((resolve, reject) => {
      this.afAuth.user.subscribe(currentUser => {
        if (currentUser) {
          firebase.firestore().collection('fotos').get()
            .then(
              res => resolve(res),
              err => reject(err)
            )
        }
      })
    });
  }

  createFoto(title, cualidad) {
    return new Promise<any>((resolve, reject) => {
      firebase.firestore().collection('fotos').add({
        ruta: title,
        creador: firebase.auth().currentUser.uid,
        fecha: Date.now(),
        votos: 0,
        cualidad: cualidad
      })
        .then(
          res => resolve(res),
          err => reject(err)
        )
    })
  }

  updateFoto(fotoKey, value) {
    return new Promise<any>((resolve, reject) => {
      let currentUser = firebase.auth().currentUser;
      firebase.firestore().collection('people').doc(currentUser.uid).collection('fotos').doc(fotoKey).set(value)
        .then(
          res => resolve(res),
          err => reject(err)
        )
    })
  }

  deleteFoto(fotoKey) {
    return new Promise<any>((resolve, reject) => {
      let currentUser = firebase.auth().currentUser;
      firebase.firestore().collection('people').doc(currentUser.uid).collection('fotos').doc(fotoKey).delete()
        .then(
          res => resolve(res),
          err => reject(err)
        )
    })
  }
}*/