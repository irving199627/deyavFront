import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { finalize, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CargarImagenesService {
  CARPETA_IMAGENES = 'img';
  progreso;
  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;
  constructor( private storage: AngularFireStorage ) { }

  cargarImagenesFirebase( imagenes: any, tipo ) {
    // console.log(imagenes);
    const fecha = new Date();
    const url = `${ this.CARPETA_IMAGENES }/${ tipo }/${fecha.getMilliseconds()}`;
    const storageRef = this.storage.ref(url);
    const task = storageRef.putString(imagenes, 'base64', { contentType: 'image/jpeg'});
    this.uploadPercent = task.percentageChanges();
    task.snapshotChanges().subscribe(() => {
      this.uploadPercent.subscribe( a => {
        console.log(a);
      });
    });
    task.snapshotChanges().pipe(
      finalize(() => {
        this.downloadURL = storageRef.getDownloadURL();
        storageRef.getDownloadURL().subscribe(res => {
            console.log(res);
        });
      })
   )
  .subscribe();

    // const uploadTask: firebase.storage.UploadTask =
    //         storageRef.child(url)
    //                   .put( imagenes );

    // uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
    //   ( snapshot: firebase.storage.UploadTaskSnapshot )  => {
    //     this.progreso = ( snapshot.bytesTransferred / snapshot.totalBytes ) * 100;
    //     console.log(this.progreso);
    //   },
    //   ( error ) => console.error('Error al subir', error),
    //   () => {
    //           console.log('imagen cargada correctamente');
    //           this.url = uploadTask.snapshot.downloadURL;
    //           this.guardarImagen(this.url);
    //   });

    // console.log(storageRef);
    // const uploadTask: firebase.storage.UploadTask = storageRef.;
    // uploadTask.on()
  }
  guardarImagen( url ) {
    console.log(url);
  }
}
