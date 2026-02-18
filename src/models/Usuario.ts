export class Usuario {
    private id: string;
    private nombre: string;
    private email: string;
    private cursos: string[];

    constructor(id: string, nombre: string, email: string) {
        this.id = id;
        this.nombre = nombre;
        this.email = email;
        this.cursos = [];
    }

    public agregarCurso(curso: string): void {
        this.cursos.push(curso);
    }

    public obtenerCursos(): string[] {
        return this.cursos;
    }

    public obtenerInformacion(): string {
        return `Usuario: ${this.nombre} - Email: ${this.email}`;
    }
}
