import { Usuario } from "./domain/Usuario";

const usuario1 = new Usuario("1", "Javier", "jcondorich@unjbg.edu.pe");

usuario1.agregarCurso("Programación Avanzada");

console.log(usuario1.obtenerInformacion());
console.log(usuario1.obtenerCursos());
