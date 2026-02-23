import { Usuario } from "./Usuario";
import { Curso } from "./Curso";

export class Inscripcion {
    private fecha: Date;
    private estado: string;

    constructor(
        private estudiante: Usuario,
        private curso: Curso
    ) {
        this.fecha = new Date();
        this.estado = "ACTIVA";
    }

    public getEstudiante(): Usuario {
        return this.estudiante;
    }

    public getCurso(): Curso {
        return this.curso;
    }

    public getFecha(): Date {
        return this.fecha;
    }

    public getEstado(): string {
        return this.estado;
    }

    public cancelar(): void {
        this.estado = "CANCELADA";
    }

    public toString(): string {
        return `
Inscripción:
Estudiante: ${this.estudiante.getNombre()}
Curso: ${this.curso.getNombre()}
Fecha: ${this.fecha.toLocaleDateString()}
Estado: ${this.estado}
        `;
    }
}