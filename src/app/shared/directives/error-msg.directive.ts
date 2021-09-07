import { ThrowStmt } from '@angular/compiler';
import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit, OnChanges{

  private _color:string ='yellow'; 
  private _mensaje:string = 'Sergio Canal'; 
  private _valido:boolean = false;

  @Input() set color(valor:string){
    this._color = valor;
    this.setColor();
  };

  //@Input() mensaje: string = 'Obligatorio';
  @Input() set mensaje(valor:string){
    this._mensaje = valor;
    this.setMensaje();
  }

    //@Input() mensaje: string = 'Obligatorio';
    @Input() set valido(valor:boolean){
      this._valido = valor;
      
      if (!valor){
        this.el.nativeElement.classList.add('hidden');
      }else{
        this.el.nativeElement.classList.remove('hidden');
      }
    }
  constructor(private el: ElementRef<HTMLElement>) { 

  }


  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges de la directiva');
   /* if (changes.mensaje){
      const newMensaje = changes.mensaje.currentValue;
      this.el.nativeElement.innerText = newMensaje;  
    }
    
    if (changes.color){
      const newColor = changes.color.currentValue;
      this.el.nativeElement.style.color = newColor; 
    }
    console.log(changes);*/
  }

  ngOnInit(): void {
    this.setColor();
    this.setMensaje();
    this.setEstilo();
  }

  setEstilo():void{
    this.el.nativeElement.classList.add('form-text'); 
  }


  setColor():void{
    this.el.nativeElement.style.color = this._color;
  }

  setMensaje():void{
    this.el.nativeElement.innerText = this._mensaje;
  }

}
