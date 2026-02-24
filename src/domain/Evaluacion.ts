export abstract class Evaluacion {
  constructor(
    protected id: number,
    protected fecha: Date,
    protected peso: number,
    protected nota: number
  ) {}

  public abstract calcularNotaFinal(): number;
}