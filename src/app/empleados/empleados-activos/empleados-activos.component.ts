import { Component } from '@angular/core';

@Component({
  selector: 'app-empleados-activos',
  templateUrl: './empleados-activos.component.html',
  styleUrls: ['./empleados-activos.component.css']
})
export class EmpleadosActivosComponent {
  empleados = [
    { nombre: 'García, Ana', legajo: '1023', puesto: 'Operaria', sector: 'Producción', fecha: '12/03/2021', estado: 'Activo' },
    { nombre: 'Pérez, Luis', legajo: '0876', puesto: 'Analista Sr.', sector: 'RRHH', fecha: '05/09/2019', estado: 'Activo' },
    { nombre: 'Rodríguez, Sofía', legajo: '1201', puesto: 'Dev SSR', sector: 'IT', fecha: '21/01/2024', estado: 'Seleccionado' },
    { nombre: 'González, Miguel', legajo: '0745', puesto: 'Supervisor', sector: 'Ventas', fecha: '15/07/2020', estado: 'Activo' },
    { nombre: 'Martínez, Carla', legajo: '1156', puesto: 'Contadora', sector: 'Administración', fecha: '03/11/2022', estado: 'Activo' }
  ];
}
