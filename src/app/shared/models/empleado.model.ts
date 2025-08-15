export interface Empleado {
  id: number;
  nombreCompleto: string;
  legajo: string;
  puesto: string;
  sector: string;
  fechaIngreso: string;
  estado: 'Activo' | 'Seleccionado' | 'Baja';
  avatarUrl?: string;
}