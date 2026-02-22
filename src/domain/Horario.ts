export class Horario {
    constructor(
        private dia: string,
        private horaInicio: string,
        private horaFin: string
    ) {}

    public getDia(): string {
        return this.dia;
    }

    public getHoraInicio(): string {
        return this.horaInicio;
    }

    public getHoraFin(): string {
        return this.horaFin;
    }

    public toString(): string {
        return `${this.dia} de ${this.horaInicio} a ${this.horaFin}`;
    }
}