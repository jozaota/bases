import { Component, OnInit } from '@angular/core';
import { ICliente } from '../interfaces/clientes';

@Component({
  selector: 'app-pagina-inicio',
  templateUrl: './pagina-inicio.component.html',
  styleUrls: ['./pagina-inicio.component.css']
})
export class PaginaInicioComponent implements OnInit {

  nuevo: ICliente = {
    nombre: '',
    credito: 0
  }
  cliente: ICliente[] = [
    {
      nombre: 'Carlos',
      credito: 5600
    },
    {
      nombre: 'Jose',
      credito: 9600
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  agregar()
  {

      if(this.nuevo.nombre.trim().length === 0)
      {
          return;
      }
      if(this.nuevo.credito === null)
      {
          return;
      }

      this.cliente.push(this.nuevo);
      this.nuevo = {
        nombre: '',
        credito: 0
      }
  }
}
