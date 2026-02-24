import { Recurso } from "./Recurso";

export class Video extends Recurso {
  public mostrar(): void {
    console.log("Reproduciendo video: " + this.titulo);
  }
}