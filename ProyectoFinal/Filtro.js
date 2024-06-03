const productos = [
    {
        nombre: 'Camiseta Hombre',
        precio: 48.000,
        categoria: 'Hombre',
        codigo: 'Aa123456',
        imagen: '/img/Camiseta.jpg',
        color: 'Azul',
        talla: 'L',
        material: 'Tela Fria'
    },
    {
        nombre: 'Polo',
        precio: 70.000,
        categoria: 'Hombre',
        codigo: 'Ab123456',
        imagen: '/img/Camiseta.jpg',
        color: 'Negro',
        talla: 'XL',
        material: 'Algodon'
    },
    {
        nombre: 'ChaquetaHombre',
        precio: 80.000,
        categoria: 'Hombre',
        codigo: 'Ac123456',
        imagen: '/img/Camiseta.jpg',
        color: 'Rojo',
        talla: 'M',
        material: 'Poliester'
    },
    {
        nombre: 'Pantalon',
        precio: 95.000,
        categoria: 'Hombre',
        codigo: 'Ad123456',
        imagen: '/img/Camiseta.jpg',
        color: 'Azul',
        talla: 'L',
        material: 'Algodon'
    },
    {
        nombre: 'Camisa Formal',
        precio: 70.000,
        categoria: 'Hombre',
        codigo: 'Ae123456',
        imagen: '/img/Camiseta.jpg',
        color: 'Blanca',
        talla: 'M',
        material: 'Algodon'
    },
    {
        nombre: 'Saco',
        precio: 75.000,
        categoria: 'Hombre',
        codigo: 'Af123456',
        imagen: '/img/Camiseta.jpg',
        color: 'Verde',
        talla: 'L',
        material: 'Algodon'
    },
    {
        nombre: 'Sudadera',
        precio: 70.000,
        categoria: 'Hombre',
        codigo: 'Ag123456',
        imagen: '/img/Camiseta.jpg',
        color: 'Negro',
        talla: 'L',
        material: 'Piel De Durazno'
    },
    {
        nombre: 'Oversize',
        precio: 60.000,
        categoria: 'Hombre',
        codigo: 'Ah123456',
        imagen: '/img/Camiseta.jpg',
        color: 'Rojo',
        talla: 'XL',
        material: 'Tela Fria'
    },
    {
        nombre: 'Pantaloneta',
        precio: 50.000,
        categoria: 'Hombre',
        codigo: 'Ai123456',
        imagen: '/img/Camiseta.jpg',
        color: 'Blanco',
        talla: 'M',
        material: 'Piel De Durazno'
    },
    {
        nombre: 'Mocho',
        precio: 85.000,
        categoria: 'Hombre',
        codigo: 'Aj123456',
        imagen: '/img/Camiseta.jpg',
        color: 'Azul',
        talla: 'M',
        material: 'Algodon'
    },
    {
        nombre: 'Blusa',
        precio: 50.000,
        categoria: 'Mujer',
        codigo: 'Ba123456',
        imagen: '/img/Camiseta.jpg',
        color: 'Blanco',
        talla: 'S',
        material: 'Satin'
    },
    {
        nombre: 'Falda',
        precio: 80.000,
        categoria: 'Mujer',
        codigo: 'Bb123456',
        imagen: '/img/Camiseta.jpg',
        color: 'Azul',
        talla: 'M',
        material: 'Seda'
    },
    {
        nombre: 'Camiseta Mujer',
        precio: 48.000,
        categoria: 'Mujer',
        codigo: 'Bc123456',
        imagen: '/img/Camiseta.jpg',
        color: 'Verde',
        talla: 'S',
        material: 'Tela Fria'
    },
    {
        nombre: 'JeanMujer',
        precio: 95.000,
        categoria: 'Mujer',
        codigo: 'Bd123456',
        imagen: '/img/Camiseta.jpg',
        color: 'Blanco',
        talla: 'XL',
        material: 'Algodon'
    },
    {
        nombre: 'Short',
        precio: 85.000,
        categoria: 'Mujer',
        codigo: 'Be123456',
        imagen: '/img/Camiseta.jpg',
        color: 'Negro',
        talla: 'L',
        material: 'Algodon'
    },
    {
        nombre: 'Conjunto',
        precio: 105.000,
        categoria: 'Mujer',
        codigo: 'bf123456',
        imagen: '/img/Camiseta.jpg',
        color: 'Verde',
        talla: 'M',
        material: 'Seda'
    },
    {
        nombre: 'Enterizo',
        precio: 100.000,
        categoria: 'Mujer',
        codigo: 'Bg123456',
        imagen: '/img/Camiseta.jpg',
        color: 'Negro',
        talla: 'M',
        material: 'Algodon'
    },
    {
        nombre: 'Saco Corto',
        precio: 65.000,
        categoria: 'Mujer',
        codigo: 'Bh123456',
        imagen: '/img/Camiseta.jpg',
        color: 'Blanco',
        talla: 'XL',
        material: 'Algodon'
    },
    {
        nombre: 'Licra',
        precio: 55.000,
        categoria: 'Mujer',
        codigo: 'Bi123456',
        imagen: '/img/Camiseta.jpg',
        color: 'Negro',
        talla: 'S',
        material: 'Nylon'
    },
    {
        nombre: 'Chaqueta Mujer',
        precio: 85.000,
        categoria: 'Mujer',
        codigo: 'Bj123456',
        imagen: '/img/Camiseta.jpg',
        color: 'Blanco',
        talla: 'M',
        material: 'Poliester'
    },
    {
        nombre: 'Pijama',
        precio: 80.000,
        categoria: 'Niños',
        codigo: 'Ca123456',
        imagen: '/img/Camiseta.jpg',
        color: 'Verde',
        talla: 'S',
        material: 'Satin'
    },
    {
        nombre: 'Sudadera Niños',
        precio: 65.000,
        categoria: 'Niños',
        codigo: 'Cb123456',
        imagen: '/img/Camiseta.jpg',
        color: 'Rojo',
        talla: 'M',
        material: 'Piel De Durazno'
    },
    {
        nombre: 'Falda Niña',
        precio: 70.000,
        categoria: 'Niños',
        codigo: 'Cc123456',
        imagen: '/img/Camiseta.jpg',
        color: 'Negro',
        talla: 'S',
        material: 'Algodon'
    },
    {
        nombre: 'Camiseta Niña',
        precio: 45.000,
        categoria: 'Niños',
        codigo: 'Cd123456',
        imagen: '/img/Camiseta.jpg',
        color: 'Rojo',
        talla: 'L',
        material: 'Tela Fria'
    },
    {
        nombre: 'Camiseta Niño',
        precio: 45.000,
        categoria: 'Niños',
        codigo: 'Ce123456',
        imagen: '/img/Camiseta.jpg',
        color: 'Verde',
        talla: 'M',
        material: 'Tela fria'
    },
    {
        nombre: 'Overol',
        precio: 75.000,
        categoria: 'Niños',
        codigo: 'Cf123456',
        imagen: '/img/Camiseta.jpg',
        color: 'Azul',
        talla: 'M',
        material: 'Algodon'
    },
    {
        nombre: 'Vestido de baño',
        precio: 80.000,
        categoria: 'Niños',
        codigo: 'Cg123456',
        imagen: '/img/Camiseta.jpg',
        color: 'Negro',
        talla: 'S',
        material: 'Poliester'
    },
    {
        nombre: 'Pantalon Niño',
        precio: 75.000,
        categoria: 'Niños',
        codigo: 'Ch123456',
        imagen: '/img/Camiseta.jpg',
        color: 'Blanco',
        talla: 'L',
        material: 'Algodon'
    },
    {
        nombre: 'Short Niña',
        precio: 70.000,
        categoria: 'Niños',
        codigo: 'Ci123456',
        imagen: '/img/Camiseta.jpg',
        color: 'Azul',
        talla: 'S',
        material: 'Algodon'
    },
    {
        nombre: 'Medias',
        precio: 5.000,
        categoria: 'Niños',
        codigo: 'Cj123456',
        imagen: '/img/Camiseta.jpg',
        color: 'Verde',
        talla: 'L',
        material: 'Algodon'
    },
    {
        nombre: 'Falda Deportiva',
        precio: 65.000,
        categoria: 'Deportivo',
        codigo: 'Da123456',
        imagen: '/img/Camiseta.jpg',
        color: 'Negro',
        talla: 'XL',
        material: 'Nylon'
    },
    {
        nombre: 'Sosten De Deporte',
        precio: 55.000,
        categoria: 'Deportivo',
        codigo: 'Db123456',
        imagen: '/img/Camiseta.jpg',
        color: 'Rojo',
        talla: 'M',
        material: 'Poliester'
    },
    {
        nombre: 'Pantaloneta Running',
        precio: 55.000,
        categoria: 'Deportivo',
        codigo: 'Dc123456',
        imagen: '/img/Camiseta.jpg',
        color: 'Azul',
        talla: 'M',
        material: 'Piel de Durazno'
    },
    {
        nombre: 'Camiseta Sin Mangas',
        precio: 60.000,
        categoria: 'Deportivo',
        codigo: 'Dd123456',
        imagen: '/img/Camiseta.jpg',
        color: 'Verde',
        talla: 'M',
        material: 'Poliester'
    },
    {
        nombre: 'Camiseta Fit',
        precio: 70.000,
        categoria: 'Deportivo',
        codigo: 'De123456',
        imagen: '/img/Camiseta.jpg',
        color: 'Azul',
        talla: 'M',
        material: 'Algodon'
    },
    {
        nombre: 'Camiseta De Entrenamiento Manga Larga',
        precio: 70.000,
        categoria: 'Deportivo',
        codigo: 'Df123456',
        imagen: '/img/Camiseta.jpg',
        color: 'Azul',
        talla: 'M',
        material: 'Algodon'
    },
    {
        nombre: 'Conjunto Deportivo',
        precio: 70.000,
        categoria: 'Deportivo',
        codigo: 'Dg123456',
        imagen: '/img/Camiseta.jpg',
        color: 'Azul',
        talla: 'M',
        material: 'Algodon'
    },
    {
        nombre: 'Saco Deportivo',
        precio: 70.000,
        categoria: 'Deportivo',
        codigo: 'Dh123456',
        imagen: '/img/Camiseta.jpg',
        color: 'Azul',
        talla: 'M',
        material: 'Algodon'
    },
    {
        nombre: 'Sudadera Deportiva',
        precio: 70.000,
        categoria: 'Deportivo',
        codigo: 'Di123456',
        imagen: '/img/Camiseta.jpg',
        color: 'Azul',
        talla: 'M',
        material: 'Algodon'
    },
    {
        nombre: 'Licra Corta',
        precio: 70.000,
        categoria: 'Deportivo',
        codigo: 'Dj123456',
        imagen: '/img/Camiseta.jpg',
        color: 'Azul',
        talla: 'M',
        material: 'Algodon'
    },
    {
        nombre: 'Reloj',
        precio: 70.000,
        categoria: 'Acesorios',
        codigo: 'Ea123456',
        imagen: '/img/Camiseta.jpg',
        color: 'Azul',
        talla: 'M',
        material: 'Algodon'
    },
    {
        nombre: 'Gorra',
        precio: 70.000,
        categoria: 'Acesorios',
        codigo: 'Eb123456',
        imagen: '/img/Camiseta.jpg',
        color: 'Azul',
        talla: 'M',
        material: 'Algodon'
    },
    {
        nombre: 'Billetera',
        precio: 70.000,
        categoria: 'Acesorios',
        codigo: 'Ec123456',
        imagen: '/img/Camiseta.jpg',
        color: 'Azul',
        talla: 'M',
        material: 'Algodon'
    },
    {
        nombre: 'Aretes',
        precio: 70.000,
        categoria: 'Acesorios',
        codigo: 'Ed123456',
        imagen: '/img/Camiseta.jpg',
        color: 'Azul',
        talla: 'M',
        material: 'Algodon'
    },
    {
        nombre: 'Correa',
        precio: 70.000,
        categoria: 'Acesorios',
        codigo: 'Ee123456',
        imagen: '/img/Camiseta.jpg',
        color: 'Azul',
        talla: 'M',
        material: 'Algodon'
    },
    {
        nombre: 'Bolso',
        precio: 70.000,
        categoria: 'Acesorios',
        codigo: 'Ef123456',
        imagen: '/img/Camiseta.jpg',
        color: 'Azul',
        talla: 'M',
        material: 'Algodon'
    },
    {
        nombre: 'Maletin',
        precio: 70.000,
        categoria: 'Acesorios',
        codigo: 'Eg123456',
        imagen: '/img/Camiseta.jpg',
        color: 'Azul',
        talla: 'M',
        material: 'Algodon'
    },
    {
        nombre: 'Canguro',
        precio: 70.000,
        categoria: 'Acesorios',
        codigo: 'Eh123456',
        imagen: '/img/Camiseta.jpg',
        color: 'Azul',
        talla: 'M',
        material: 'Algodon'
    },
    {
        nombre: 'Carriel',
        precio: 70.000,
        categoria: 'Acesorios',
        codigo: 'Ei123456',
        imagen: '/img/Camiseta.jpg',
        color: 'Azul',
        talla: 'M',
        material: 'Algodon'
    },
    {
        nombre: 'Gafas De Sol',
        precio: 70.000,
        categoria: 'Hombre',
        codigo: 'Ej123456',
        imagen: '/img/Camiseta.jpg',
        color: 'Azul',
        talla: 'M',
        material: 'Algodon'
    },
];

let filtradoDeProductos = [];
let perPage2 = 10;
let paginaActual2 = 1;


function filtrarProductos() {
    if(localStorage.getItem("datos") != undefined){
        var productosGet = localStorage.getItem("datos");
        var parseProducts = JSON.parse(productosGet);
    }
    else {
        console.log("No tiene productos");
    }
    const categoriaSeleccionada = document.getElementById('categoria').value;
    const colorSeleccionado = document.getElementById('color').value;
    const tallaSeleccionada = document.getElementById('talla').value;

    filtradoDeProductos = parseProducts.filter(producto => {
        let categoriaValida = true;
        let colorValido = true;
        let tallaValida = true;

        if (categoriaSeleccionada) {
            categoriaValida = producto.categoria.toLowerCase() === categoriaSeleccionada.toLowerCase();
        }
        if (colorSeleccionado) {
            colorValido = producto.color.toLowerCase() === colorSeleccionado.toLowerCase();
        }
        if (tallaSeleccionada) {
            tallaValida = producto.talla.toLowerCase() === tallaSeleccionada.toLowerCase();
        }

        return categoriaValida && colorValido && tallaValida;
    });

    mostrarPagina2(paginaActual2);
}

function limpiarFiltros() {
    document.getElementById('categoria').value = '';
    document.getElementById('color').value = '';
    document.getElementById('talla').value = '';

    filtradoDeProductos = [];
    mostrarPagina2(paginaActual2);
}

function mostrarPagina2(page) {
    let cuerpotabla = document.querySelector('tbody');
    cuerpotabla.innerHTML = '';

    const startIndex2 = (page - 1) * perPage2;
    const endIndex2 = Math.min(startIndex2 + perPage2, filtradoDeProductos.length);

    // Mostrar productos filtrados
    for (let i = startIndex2; i < endIndex2; i++) {
        const producto2 = filtradoDeProductos[i];
        const row = cuerpotabla.insertRow();

        row.innerHTML = `
            <td><img src="${producto2.imagen}" alt="${producto2.nombre}" style="width: 100px;"></td>
            <td>${producto2.nombre}</td>
            <td>${producto2.categoria}</td>
            <td>${producto2.precio}</td>
            <td>${producto2.codigo}</td>
            <td>${producto2.color}</td>
            <td>${producto2.talla}</td>
            <td>${producto2.material}</td>
        `;
    }

    // Rellenar con filas vacías si hay menos de perPage2 productos
    const numeroDeFilasActuales = endIndex2 - startIndex2;
    const filasRestantes = perPage2 - numeroDeFilasActuales;

    for (let i = 0; i < filasRestantes; i++) {
        const row = cuerpotabla.insertRow();
        row.innerHTML = `
            <td><img src="" alt="" style="width: 100px;"></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        `;
    }

    document.getElementById('paginaActual2').textContent = `Página ${page}`;

    if (page === 1) {
        anteriorPagina.style.display = 'none';
    } else {
        anteriorPagina.style.display = 'inline-block';
    }
}

function irAnteriorPagina2() {
    if (paginaActual2 > 1) {
        paginaActual2--;
        mostrarPagina2(paginaActual2);
    }
}

function irSiguientePagina2() {
    const totalPaginas2 = Math.ceil(filtradoDeProductos.length / perPage2);
    if (paginaActual2 < totalPaginas2) {
        paginaActual2++;
        mostrarPagina2(paginaActual2);
    }
}
function volverAtras() {
    history.back();
}

document.getElementById('anteriorPagina').addEventListener('click', irAnteriorPagina2);
document.getElementById('siguientePagina').addEventListener('click', irSiguientePagina2);

mostrarPagina2(paginaActual2);