import { Unidad } from "./Unidad";
import { Evaluacion } from "./Evaluacion";

export class Curso {
  private unidades: Unidad[] = [];
  private evaluaciones: Evaluacion[] = [];

  constructor(
    private id: number,
    private nombre: string
  ) {}

  public agregarUnidad(unidad: Unidad): void {
    this.unidades.push(unidad);
  }

  public agregarEvaluacion(evaluacion: Evaluacion): void {
    this.evaluaciones.push(evaluacion);
  }

  public calcularProgreso(): number {
    if (this.unidades.length === 0) {
      return 0;
    }

    let suma = 0;

    for (const unidad of this.unidades) {
      suma += unidad.calcularProgreso();
    }

    return suma / this.unidades.length;
  }

  public calcularNotaFinal(): number {
    let suma = 0;

    for (const evaluacion of this.evaluaciones) {
      suma += evaluacion.calcularNotaFinal();
    }

    return suma;
  }

  public getNombre(): string {
    return this.nombre;
  }
}