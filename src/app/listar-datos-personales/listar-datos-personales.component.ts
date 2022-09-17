import { Component, OnInit } from '@angular/core';
import { DatosP } from '../interfaces/datosPersonales';

@Component({
  selector: 'app-listar-datos-personales',
  templateUrl: './listar-datos-personales.component.html',
  styleUrls: ['./listar-datos-personales.component.css'],
})
export class ListarDatosPersonalesComponent implements OnInit {
  listComentarios: DatosP[] = [
    {
      identificacion: 1086756,
      nombre: 'Agustin',
      apellido: 'Andrade',
      direccion: 'MZ-12 Las cruces',
      email: 'agustin1235@gmail.com',
      telefono: 3125269456,
    },
    {
      identificacion: 45649284,
      nombre: 'Carmen',
      apellido: 'Ibarra',
      direccion: 'MZ345- Iles',
      email: 'carmelita4@gmail.com',
      telefono: 3215465842,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
