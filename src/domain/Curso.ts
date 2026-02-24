export class Curso {
    constructor(
        private codigo: string,
        private nombre: string,
        private creditos: number,
        private docente: Docente,
        private aula: Aula,
        private horario: Horario
    ) {}

    public getCodigo(): string {
        return this.codigo;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public getCreditos(): number {
        return this.creditos;
    }

    public getDocente(): Docente {
        return this.docente;
    }

    public getAula(): Aula {
        return this.aula;
    }

    public getHorario(): Horario {
        return this.horario;
    }

    public toString(): string {
        return `
Curso: ${this.nombre}
Docente: ${this.docente.getNombre()}
Aula: ${this.aula.getCodigo()}
Horario: ${this.horario.toString()}
        `;
    }
}