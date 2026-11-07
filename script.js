const productos = [
    { id: 1, titulo: "Cien años de soledad", autor: "Gabriel García Márquez", precio: "$45.000" },
    { id: 2, titulo: "El principito", autor: "Antoine de Saint-Exupéry", precio: "$25.000" },
    { id: 3, titulo: "Ficciones", autor: "Jorge Luis Borges", precio: "$35.000" }
];

const contenedor = document.getElementById("contenedor-productos");

if (contenedor) {
    productos.forEach(producto => {
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjeta-producto");
        tarjeta.innerHTML = `
            <h3>${producto.titulo}</h3>
            <p><strong>Autor:</strong> ${producto.autor}</p>
            <p><strong>Precio:</strong> ${producto.precio}</p>
        `;
        contenedor.appendChild(tarjeta);
    });
}