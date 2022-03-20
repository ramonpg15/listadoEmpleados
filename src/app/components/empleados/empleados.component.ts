import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.scss']
})
export class EmpleadosComponent implements OnInit {
  nombre=''
  apellidos=''
  hora=''
  area=''
  listaEmpleados:any[]=[]
  constructor() { }

  ngOnInit(): void {
  }
  registrarAsistencia(){
    
    if(this.nombre===''|| this.apellidos===''||this.hora===''||this.area===''){
      console.log('Error');
      return
    }
    //Creamos el objeto 
    const REGISTRO={
      nombre:this.nombre,
      apellidos:this.apellidos,
      hora:this.hora,
      area:this.area
    }
    console.log(REGISTRO);
    //agregar el objeto a la lista 
    this.listaEmpleados.push(REGISTRO)
    console.log(this.listaEmpleados);
    this.nombre=''
    this.apellidos=''
    this.hora=''
    this.area=''
  }
  eliminarEmpleado(indx:number){
    this.listaEmpleados.splice(indx,1)
  }
}
