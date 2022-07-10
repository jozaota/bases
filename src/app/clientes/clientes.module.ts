import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaInicioComponent } from './pagina-inicio/pagina-inicio.component';



@NgModule({
  declarations: [
    PaginaInicioComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PaginaInicioComponent
  ]
})
export class ClientesModule { }
