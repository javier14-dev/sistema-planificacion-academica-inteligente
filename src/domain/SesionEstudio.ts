import { EstadoSesion } from "./EstadoSesion";
import { Tema } from "./Tema";

export class SesionEstudio {
  private estado: EstadoSesion = EstadoSesion.PENDIENTE;

  constructor(
    private fecha: Date,
    private duracion: number,
    private tema: Tema
  ) {}

  public completarSesion(): void {
    this.estado = EstadoSesion.COMPLETADA;
  }

  public getEstado(): EstadoSesion {
    return this.estado;
  }
}