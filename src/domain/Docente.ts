export class Docente {
    private cursos: string[] = [];

    constructor(
        private id: string,
        private nombre: string,
        private especialidad: string
    ) {}

    public getId(): string {
        return this.id;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public getEspecialidad(): string {
        return this.especialidad;
    }

    public agregarCurso(nombreCurso: string): void {
        this.cursos.push(nombreCurso);
    }

    public getCursos(): string[] {
        return this.cursos;
    }

    public toString(): string {
        return `Docente: ${this.nombre} - Especialidad: ${this.especialidad}`;
    }
}