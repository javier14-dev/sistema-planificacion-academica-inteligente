import { Usuario } from "../domain/Usuario";
import { Curso } from "../domain/Curso";
import { Inscripcion } from "../domain/Inscripcion";

export class PlanificadorAcademico {
    private usuarios: Usuario[] = [];
    private cursos: Curso[] = [];
    private inscripciones: Inscripcion[] = [];

    public registrarUsuario(usuario: Usuario): void {
        this.usuarios.push(usuario);
    }

    public registrarCurso(curso: Curso): void {
        this.cursos.push(curso);
    }

    public inscribir(estudiante: Usuario, curso: Curso): void {
        const nuevaInscripcion = new Inscripcion(estudiante, curso);
        this.inscripciones.push(nuevaInscripcion);
    }

    public listarUsuarios(): Usuario[] {
        return this.usuarios;
    }

    public listarCursos(): Curso[] {
        return this.cursos;
    }

    public listarInscripciones(): Inscripcion[] {
        return this.inscripciones;
    }
}