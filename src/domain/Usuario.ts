import { Curso } from "./Curso";

export class Usuario {
    private id: string;
    private nombre: string;
    private email: string;
    private cursos: Curso[] = [];

    constructor(id: string, nombre: string, email: string) {
        this.id = id;
        this.nombre = nombre;
        this.email = email;
    }

    getId(): string {
        return this.id;
    }

    getNombre(): string {
        return this.nombre;
    }

    getEmail(): string {
        return this.email;
    }

    public agregarCurso(curso: Curso): void {
        this.cursos.push(curso);
    }

    public obtenerCursos(): Curso[] {
        return this.cursos;
    }

    buscarCursoPorNombre(nombre: string): Curso | undefined {
        return this.cursos.find(curso => curso.getNombre() === nombre);
    }
}
