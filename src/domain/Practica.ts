import { Evaluacion } from "./Evaluacion";

export class Practica extends Evaluacion {
  public calcularNotaFinal(): number {
    return this.nota * this.peso;
  }
}