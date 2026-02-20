"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
class Usuario {
    id;
    nombre;
    email;
    cursos;
    constructor(id, nombre, email) {
        this.id = id;
        this.nombre = nombre;
        this.email = email;
        this.cursos = [];
    }
    agregarCurso(curso) {
        this.cursos.push(curso);
    }
    obtenerCursos() {
        return this.cursos;
    }
    obtenerInformacion() {
        return `Usuario: ${this.nombre} - Email: ${this.email}`;
    }
}
exports.Usuario = Usuario;
//# sourceMappingURL=Usuario.js.map