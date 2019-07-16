import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Usuario } from '../models/usuario.model';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  forma: FormGroup;
  constructor() { }


  sonIguales(campo1: string, campo2: string) {
    return ( group: FormGroup ) => {
      const pass1 = group.controls[campo1].value;
      const pass2 = group.controls[campo2].value;

      if (pass1 === pass2) {
        return null;
      } else {
        return {
          sonIguales: true
        };
      }
    };
  }

  ngOnInit() {
    this.forma = new FormGroup({
      nombre: new FormControl( null, Validators.required ),
      apellidos: new FormControl( null, Validators.required),
      trabajo_actual: new FormControl( null, Validators.required),
      nickname: new FormControl( null, Validators.required),
      email: new FormControl( null, [Validators.required, Validators.email] ),
      password: new FormControl( null, Validators.required ),
      password2: new FormControl( null, Validators.required ),
      // condiciones: new FormControl( false )
    }, { validators: this.sonIguales('password', 'password2') });
  }

  registrarUsuarios() {
    console.log(this.forma);
  }
}
