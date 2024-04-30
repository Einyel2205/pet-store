import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, Form } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})

export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required, Validators.minLength(8)],
    });
  }

  
  onSubmit() {
    if (this.loginForm.valid) {
      //*Logica para autenticar el usuario
      console.log(this.loginForm.value);
      this.loginForm.reset();
    } else {
      //*Manejar errores de validacion
      console.log('Revisar los campos. Formulario invalido');
    }
  }
}

