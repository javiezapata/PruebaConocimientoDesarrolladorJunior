import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {
  send: boolean = false;
  appointmentForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private appointmentService: ServicesService,
    private router: Router
  ) {
    this.appointmentForm = this.fb.group({
      nombre: ['', Validators.required],
      telefono: ['', Validators.required,Validators.minLength(3)],
      correo: ['', [Validators.required, Validators.email]],
      direccion: ['', Validators.required],
      fecha_nacimiento: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {

    if(this.appointmentForm){
    console.log("Formulario enviado")
    console.log(this.appointmentForm.validator)

    this.appointmentService.envioForm(this.appointmentForm.value).subscribe(
      data => {
        console.log(data)
        this.send = true
      }
    )
    }
  
  else{
    console.log("faltan datos")
  }

  }
}
