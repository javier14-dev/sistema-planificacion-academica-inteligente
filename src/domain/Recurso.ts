export abstract class Recurso {
  constructor(
    protected titulo: string,
    protected url: string
  ) {}

  public abstract mostrar(): void;

  public getTitulo(): string {
    return this.titulo;
  }
}