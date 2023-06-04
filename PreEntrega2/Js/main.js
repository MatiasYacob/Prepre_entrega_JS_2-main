// Class "Articulo" para el constructor del Array
class Articulo {
    constructor(nombre, stock, precioMayorista, precioMinorista) {
        this.nombre = nombre;
        this.stock = stock;
        this.precioMayorista = precioMayorista;
        this.precioMinorista = precioMinorista;
    }
}
// Array para los Articulos
const articulos = [];
// Inicio del programa
while (true) {
    const opcion = prompt('Seleccione una opción:\n1. Ingresar artículo nuevo\n2. Consultar artículos\n3. Quitar artículo\n4. Salir');

    if (opcion === '1') {
        ingresarArticulo();
    } else if (opcion === '2') {
        consultarArticulos();
    } else if (opcion === '3') {
        quitarArticulo();
    } else if (opcion === '4') {
        alert('Programa finalizado.');
        break;
    } else {
        alert('Opción inválida. Por favor, seleccione una opción válida.');
    }
}
