"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Usuario_js_1 = require("./models/Usuario.js");
const usuario1 = new Usuario_js_1.Usuario("1", "Javier", "jcondorich@unjbg.edu.pe");
usuario1.agregarCurso("Programación Avanzada");
console.log(usuario1.obtenerInformacion());
console.log(usuario1.obtenerCursos());
//# sourceMappingURL=index.js.map