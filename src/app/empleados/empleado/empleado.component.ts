import { Component, OnInit } from '@angular/core';
import { IEmpleado } from '../interfaces/empleado';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  tituloAntiguo: string = 'Empleados antiguos';
  tituloNuevo: string = 'Empleados nuevos';

  empleadosAntiguos: IEmpleado[] = [
    {
      nombres: 'jose',
      apellidos: 'zarate',
      direccion: ' san agustin 1033',
      sueldo: 3000
    },
    {
      nombres: 'manuel',
      apellidos: 'otazu',
      direccion: ' san francisco 2033',
      sueldo: 5000
    },
    {
      nombres: 'angelica',
      apellidos: 'moron',
      direccion: ' santiago 3033',
      sueldo: 7000
    }
  ];

  empleadosNuevos: IEmpleado[] = [
    {
      nombres: 'miryan',
      apellidos: 'knapps',
      direccion: ' niedelbergs 8033',
      sueldo: 7500
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
