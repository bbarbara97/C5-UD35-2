import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'C5-UD35-2';

  datos: Array<object> = [];
  respuesta: boolean = false;

  public userForm: FormGroup;
  name: string = '';
  email: string = '';
  msj: string = '';
  suma: string = '';

  constructor(private fb: FormBuilder) {
    // Form element defined below
    this.userForm = this.fb.group({
      name: '',
      email: '',
      msj: '',
      suma: '',
    });
  }

  setValue() {
    this.respuesta = this.validar();

    this.name = this.userForm.get('name')?.value; // input value retrieved
    this.email = this.userForm.get('email')?.value;
    this.msj = this.userForm.get('msj')?.value;
    this.suma = this.userForm.get('suma')?.value;


    if (this.respuesta) {
      this.datos.push({
        name: this.name,
        email: this.email,
        msj: this.msj,
        suma: this.suma,
      });
    }
  }

  validar():boolean {
    var EMAIL_REGEX =
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (this.userForm.get('email')?.value.match(EMAIL_REGEX)) {
      this.respuesta = true;
    } else return false;

    if (this.userForm.get('msj')?.value != '') {
      this.respuesta = true;
    } else return false;

    if (this.userForm.get('suma')?.value == 5) {
      this.respuesta = true;
    } else return false;

    if (this.userForm.get('name')?.value != '') {
      this.respuesta = true;
    } else return false;

    return true;
  }
}
