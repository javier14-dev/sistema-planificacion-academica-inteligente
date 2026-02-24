export class Recordatorio {
  private enviado: boolean = false;

  constructor(
    private mensaje: string,
    private fecha: Date
  ) {}

  public enviar(): void {
    this.enviado = true;
    console.log("Recordatorio enviado: " + this.mensaje);
  }
}