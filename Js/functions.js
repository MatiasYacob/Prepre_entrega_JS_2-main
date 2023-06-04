// Función para ingresar un artículo nuevo
function ingresarArticulo() {
    const nombre = prompt('Ingrese el nombre del artículo:');
    const stock = parseFloat(prompt('Ingrese el stock del artículo:'));
    const precioMayorista = parseFloat(prompt('Ingrese el precio mayorista del artículo:'));
    const precioMinorista = parseFloat(prompt('Ingrese el precio minorista del artículo:'));

    const nuevoArticulo = new Articulo(nombre, stock, precioMayorista, precioMinorista);
    articulos.push(nuevoArticulo);

    alert('¡Artículo ingresado exitosamente!');
    console.log(articulos);
}

// Función para quitar un artículo
function quitarArticulo() {
    if (articulos.length === 0) {
        alert('No hay artículos en la lista.');
        return;
    }

    const nombresArticulos = articulos.map(articulo => articulo.nombre);
    const quitarArticulo = prompt(`Seleccione el artículo que desea quitar:\n${nombresArticulos.join('\n')}`);

    const indiceArticulo = articulos.findIndex(articulo => articulo.nombre === quitarArticulo);
    if (indiceArticulo === -1) {
        alert('No se encontró el artículo en la lista.');
        return;
    }

    articulos.splice(indiceArticulo, 1);
    alert(`El artículo "${quitarArticulo}" fue removido exitosamente.`);
}

// Función para consultar los artículos ingresados
function consultarArticulos() {
    if (articulos.length === 0) {
        alert('No hay artículos en la lista.');
        return;
    }

    let contenido = 'Productos agregados:\n\n';

    articulos.forEach(item => {
        contenido += item.nombre + ":" + " Stock: " + item.stock + " Precio Mayorista: $" + item.precioMayorista + " Precio Minorista: $" + item.precioMinorista + '\n';
    });

    alert(contenido);
}

