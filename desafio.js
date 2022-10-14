class Usuario {
    nombre;
    apellido;
    libros;
    mascotas;

    constructor(nombre, apellido, libros = [{}], mascotas = []) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    getFullName() {
        return console.log(`El nombre completo del usuario es: '${this.apellido} ${this.nombre}'`);
    }

    addMascota(mascota) {
        this.mascotas.push(mascota);
        console.log(`Se agregó la mascota '${mascota}' correctamente!. Mascotas: '${this.mascotas}'`);
    }

    countMascotas() {
        return this.mascotas.length;
    }

    addBook(nombre, autor) {
        let object = {nombre: nombre, autor: autor};
        this.libros.push(object);
        console.log(`Se agregó el libro '${object.nombre}' correctamente!`);
    }

    getBooks() {
        let array = this.libros.map((e) => e.nombre);
        return array;
    }

}

let u = new Usuario("Omar", "Adra", [{nombre: "Este dolor no es mio", autor: "Mark Wolynn"}, {nombre: "Las huellas del mal", autor: "Federico Andahazi"}], ["Gato", "Perro"]);

u.getFullName();
u.addMascota("Carpincho");
console.log(`El total de mascotas del usuario es: ${u.countMascotas()}`);
u.addBook("Personas decentes", "Leonardo Padura");
console.log("Los libros son: ", u.getBooks());