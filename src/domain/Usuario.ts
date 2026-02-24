import { Curso } from "./Curso";
import { SesionEstudio } from "./SesionEstudio";
import { Recordatorio } from "./Recordatorio";

export class Usuario {
  private cursos: Curso[] = [];
  private sesiones: SesionEstudio[] = [];
  private recordatorios: Recordatorio[] = [];

  constructor(
    private id: number,
    private nombre: string,
    private correo: string
  ) {}

  public agregarCurso(curso: Curso): void {
    this.cursos.push(curso);
  }

  public agendarSesion(sesion: SesionEstudio): void {
    this.sesiones.push(sesion);
  }

  public agregarRecordatorio(recordatorio: Recordatorio): void {
    this.recordatorios.push(recordatorio);
  }

  public calcularProgresoGlobal(): number {
    if (this.cursos.length === 0) {
      return 0;
    }

    let suma = 0;

    for (const curso of this.cursos) {
      suma += curso.calcularProgreso();
    }

    return suma / this.cursos.length;
  }
}