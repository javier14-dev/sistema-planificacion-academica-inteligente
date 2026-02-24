import { Usuario } from "../domain/Usuario";
import { SesionEstudio } from "../domain/SesionEstudio";
import { Tema } from "../domain/Tema";

export class PlanificadorService {

  public generarSesion(usuario: Usuario, tema: Tema): SesionEstudio {
    const sesion = new SesionEstudio(new Date(), 60, tema);
    usuario.agendarSesion(sesion);
    return sesion;
  }

  public analizarProgreso(usuario: Usuario): number {
    return usuario.calcularProgresoGlobal();
  }
}