import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})
export class ConsultaComponent implements OnInit{

  public id: any;
  consultForm: FormGroup;

  constructor(private service: ServicesService,
    private fb: FormBuilder
   ){
    this.consultForm = this.fb.group({
      id: ['', Validators.required],
   })
  }

  users: any[]=[];
  ngOnInit(): void {

    this.service.getApi().subscribe( data => {
      console.log(data.slice(0,5))
    })
  }
  createForm(): void {
    this.consultForm = this.fb.group({
      id: [this.id.id, Validators.required],
 });
  }

  onSubmit(): void {
    console.log(this.consultForm.value.id)
    const id = this.consultForm.value.id;
     this.service.getId(id).subscribe(data =>{
      console.log(data)
     })
  }
}
