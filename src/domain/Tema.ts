import { Recurso } from "./Recurso";

export class Tema {
  private recursos: Recurso[] = [];
  private completado: boolean = false;

  constructor(
    private id: number,
    private nombre: string
  ) {}

  public agregarRecurso(recurso: Recurso): void {
    this.recursos.push(recurso);
  }

  public marcarComoCompletado(): void {
    this.completado = true;
  }

  public estaCompletado(): boolean {
    return this.completado;
  }

  public getNombre(): string {
    return this.nombre;
  }
}