import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', Validators.required]
  });

  mensaje: string = 'Sergio Canal';
  color:string = 'pink';


  constructor(private fb:FormBuilder) { 
    console.log('Constructor del componente app-agregar');
  }

  ngOnInit(): void {
    console.log('ngOnInit del componente app-agregar');
  }


  tieneErrores(campo:string):boolean{
    return this.miFormulario.get('nombre')?.invalid || false;
  }

  cambiarNombre(){
    this.mensaje  = Math.random().toString();
  }

  cambiarColor(){
    const color:string = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
    this.color = color;
  }
}
