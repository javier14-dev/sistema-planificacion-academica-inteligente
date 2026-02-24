import { Evaluacion } from "./Evaluacion";

export class Examen extends Evaluacion {
  public calcularNotaFinal(): number {
    return this.nota * this.peso;
  }
}