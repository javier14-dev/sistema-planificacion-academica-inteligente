export class Aula {
    constructor(
        private codigo: string,
        private capacidad: number,
        private edificio: string
    ) {}

    public getCodigo(): string {
        return this.codigo;
    }

    public getCapacidad(): number {
        return this.capacidad;
    }

    public getEdificio(): string {
        return this.edificio;
    }

    public toString(): string {
        return `Aula ${this.codigo} - Edificio ${this.edificio} (Capacidad: ${this.capacidad})`;
    }
}