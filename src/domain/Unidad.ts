import { Tema } from "./Tema";

export class Unidad {
  private temas: Tema[] = [];

  constructor(
    private id: number,
    private nombre: string
  ) {}

  public agregarTema(tema: Tema): void {
    this.temas.push(tema);
  }

  public calcularProgreso(): number {
    if (this.temas.length === 0) {
      return 0;
    }

    let completados = 0;

    for (const tema of this.temas) {
      if (tema.estaCompletado()) {
        completados++;
      }
    }

    return (completados / this.temas.length) * 100;
  }
}