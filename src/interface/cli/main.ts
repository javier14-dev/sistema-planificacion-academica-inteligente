import { Usuario } from "../../domain/Usuario";
import { Curso } from "../../domain/Curso";
import { Unidad } from "../../domain/Unidad";
import { Tema } from "../../domain/Tema";
import { Video } from "../../domain/Video";
import { Examen } from "../../domain/Examen";
import { PlanificadorService } from "../../application/PlanificadorService";

const usuario = new Usuario(1, "Javier Condori", "jcondorich@unjbg.edu.pe");

const curso = new Curso(1, "Programación");

const unidad = new Unidad(1, "POO");
const tema = new Tema(1, "Clases y Objetos");

const video = new Video("Introducción a POO", "url");
tema.agregarRecurso(video);

unidad.agregarTema(tema);
curso.agregarUnidad(unidad);

const examen = new Examen(1, new Date(), 0.4, 18);
curso.agregarEvaluacion(examen);

usuario.agregarCurso(curso);

const planificador = new PlanificadorService();
planificador.generarSesion(usuario, tema);

console.log("Progreso global:", usuario.calcularProgresoGlobal());