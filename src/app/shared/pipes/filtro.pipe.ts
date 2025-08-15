import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {
  transform(empleados: any[], filtro: string): any[] {
    if (!empleados || !filtro) return empleados;
    const filtroLower = filtro.toLowerCase();
    return empleados.filter(emp =>
      emp.nombre.toLowerCase().includes(filtroLower) ||
      emp.legajo.toLowerCase().includes(filtroLower)
    );
  }
}