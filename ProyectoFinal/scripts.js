const productos = [
    {
        nombre: 'Camiseta Hombre',
        precio: "48.000",
        categoria: 'Hombre',
        codigo: 'Aa123456',
        imagen: '/img/Camiseta.jpg',
        color: 'Azul',
        talla: 'L',
        material: 'Tela Fria'
    },
    {
        nombre: 'Polo',
        precio: "70.000",
        categoria: 'Hombre',
        codigo: 'Ab123456',
        imagen: '/img/Polo.jpg',
        color: 'Negro',
        talla: 'XL',
        material: 'Algodon'
    },
    
    {
        nombre: 'Chaqueta Hombre',
        precio: "80.000",
        categoria: 'Hombre',
        codigo: 'Ac123456',
        imagen: '/img/ChaquetaRoja.jpg',
        color: 'Rojo',
        talla: 'M',
        material: 'Poliester'
    },
    {
        nombre: 'Pantalon',
        precio: "95.000",
        categoria: 'Hombre',
        codigo: 'Ad123456',
        imagen: '/img/PantalonAzul.jpg',
        color: 'Azul',
        talla: 'L',
        material: 'Algodon'
    },
    {
        nombre: 'Camisa Formal',
        precio: "70.000",
        categoria: 'Hombre',
        codigo: 'Ae123456',
        imagen: '/img/CamisaFormalBlanca.jpeg',
        color: 'Blanca',
        talla: 'M',
        material: 'Algodon'
    },
    {
        nombre: 'Saco',
        precio: "75.000",
        categoria: 'Hombre',
        codigo: 'Af123456',
        imagen: '/img/Sacoverde.jpg',
        color: 'Verde',
        talla: 'L',
        material: 'Algodon'
    },
    {
        nombre: 'Sudadera',
        precio: "70.000",
        categoria: 'Hombre',
        codigo: 'Ag123456',
        imagen: '/img/SudaderaNegra.jpg',
        color: 'Negro',
        talla: 'L',
        material: 'Piel De Durazno'
    },
    {
        nombre: 'Oversize',
        precio: "60.000",
        categoria: 'Hombre',
        codigo: 'Ah123456',
        imagen: '/img/OversizeRoja.jpg',
        color: 'Rojo',
        talla: 'XL',
        material: 'Tela Fria'
    },
    {
        nombre: 'Pantaloneta',
        precio: "50.000",
        categoria: 'Hombre',
        codigo: 'Ai123456',
        imagen: '/img/PantalonetaBlanca.jpg',
        color: 'Blanco',
        talla: 'M',
        material: 'Piel De Durazno'
    },
    {
        nombre: 'Mocho',
        precio: "85.000",
        categoria: 'Hombre',
        codigo: 'Aj123456',
        imagen: '/img/MochoAzul.jpg',
        color: 'Azul',
        talla: 'M',
        material: 'Algodon'
    },
    {
        nombre: 'Blusa',
        precio: "50.000",
        categoria: 'Mujer',
        codigo: 'Ba123456',
        imagen: '/img/BlusaBlanca.jpg',
        color: 'Blanco',
        talla: 'S',
        material: 'Satin'
    },
    {
        nombre: 'Falda',
        precio: "80.000",
        categoria: 'Mujer',
        codigo: 'Bb123456',
        imagen: '/img/FaldaAzul.jpeg',
        color: 'Azul',
        talla: 'M',
        material: 'Seda'
    },
    {
        nombre: 'Camiseta Mujer',
        precio: "48.000",
        categoria: 'Mujer',
        codigo: 'Bc123456',
        imagen: '/img/CamisetaMujerVerde.jpeg',
        color: 'Verde',
        talla: 'S',
        material: 'Tela Fria'
    },
    {
        nombre: 'Jean Mujer',
        precio: "95.000",
        categoria: 'Mujer',
        codigo: 'Bd123456',
        imagen: '/img/JeanMujerBlanco.jpg',
        color: 'Blanco',
        talla: 'XL',
        material: 'Algodon'
    },
    {
        nombre: 'Short',
        precio: "85.000",
        categoria: 'Mujer',
        codigo: 'Be123456',
        imagen: '/img/ShortNegro.jpg',
        color: 'Negro',
        talla: 'L',
        material: 'Algodon'
    },
    {
        nombre: 'Conjunto',
        precio: "105.000",
        categoria: 'Mujer',
        codigo: 'bf123456',
        imagen: '/img/ConjuntoMujerVerde.jpeg',
        color: 'Verde',
        talla: 'M',
        material: 'Seda'
    },
    {
        nombre: 'Enterizo',
        precio: "100.000",
        categoria: 'Mujer',
        codigo: 'Bg123456',
        imagen: '/img/EnterizoNegro.jpg',
        color: 'Negro',
        talla: 'M',
        material: 'Algodon'
    },
    {
        nombre: 'Saco Corto',
        precio: "65.000",
        categoria: 'Mujer',
        codigo: 'Bh123456',
        imagen: '/img/SacoCortoBlanco.jpeg',
        color: 'Blanco',
        talla: 'XL',
        material: 'Algodon'
    },
    {
        nombre: 'Licra',
        precio: "55.000",
        categoria: 'Mujer',
        codigo: 'Bi123456',
        imagen: '/img/LicraNegra.jpg',
        color: 'Negro',
        talla: 'S',
        material: 'Nylon'
    },
    {
        nombre: 'Chaqueta Mujer',
        precio: "85.000",
        categoria: 'Mujer',
        codigo: 'Bj123456',
        imagen: '/img/ChaquetaMujerBlanca.jpeg',
        color: 'Blanco',
        talla: 'M',
        material: 'Poliester'
    },
    {
        nombre: 'Pijama',
        precio: "100.000",
        categoria: 'Niños',
        codigo: 'Ca123456',
        imagen: '/img/PijamaNiños.jpeg',
        color: 'Verde',
        talla: 'S',
        material: 'Satin'
    },
    {
        nombre: 'Sudadera Niños',
        precio: "65.000",
        categoria: 'Niños',
        codigo: 'Cb123456',
        imagen: '/img/SudaderasNiñosRoja.jpg',
        color: 'Rojo',
        talla: 'M',
        material: 'Piel De Durazno'
    },
    {
        nombre: 'Falda Niña',
        precio: "70.000",
        categoria: 'Niños',
        codigo: 'Cc123456',
        imagen: '/img/FaldaNiñaNegra.jpg',
        color: 'Negro',
        talla: 'S',
        material: 'Algodon'
    },
    {
        nombre: 'Camiseta Niña',
        precio: "45.000",
        categoria: 'Niños',
        codigo: 'Cd123456',
        imagen: '/img/CamisetaNiñaRoja.jpg',
        color: 'Rojo',
        talla: 'L',
        material: 'Tela Fria'
    },
    {
        nombre: 'Camiseta Niño',
        precio: "45.000",
        categoria: 'Niños',
        codigo: 'Ce123456',
        imagen: '/img/CamisetaNiñoVerde.jpg',
        color: 'Verde',
        talla: 'M',
        material: 'Tela fria'
    },
    {
        nombre: 'Overol',
        precio: "75.000",
        categoria: 'Niños',
        codigo: 'Cf123456',
        imagen: '/img/OverolNiño.jpg',
        color: 'Azul',
        talla: 'M',
        material: 'Algodon'
    },
    {
        nombre: 'Vestido de baño',
        precio: "80.000",
        categoria: 'Niños',
        codigo: 'Cg123456',
        imagen: '/img/VestidoDeBañoNiños.jpeg',
        color: 'Negro',
        talla: 'S',
        material: 'Poliester'
    },
    {
        nombre: 'Pantalon Niño',
        precio: "75.000",
        categoria: 'Niños',
        codigo: 'Ch123456',
        imagen: '/img/PantalonNiñoBlanco.jpg',
        color: 'Blanco',
        talla: 'L',
        material: 'Algodon'
    },
    {
        nombre: 'Short Niña',
        precio: "70.000",
        categoria: 'Niños',
        codigo: 'Ci123456',
        imagen: '/img/ShortNiñaAzul.jpg',
        color: 'Azul',
        talla: 'S',
        material: 'Algodon'
    },
    {
        nombre: 'Medias',
        precio: "5.000",
        categoria: 'Niños',
        codigo: 'Cj123456',
        imagen: '/img/MediasNiños.jpg',
        color: 'Verde',
        talla: 'L',
        material: 'Algodon'
    },
    {
        nombre: 'Falda Deportiva',
        precio: "65.000",
        categoria: 'Deportivo',
        codigo: 'Da123456',
        imagen: '/img/FaldaDeportivaNegra.jpg',
        color: 'Negro',
        talla: 'XL',
        material: 'Nylon'
    },
    {
        nombre: 'Sosten De Deporte',
        precio: "55.000",
        categoria: 'Deportivo',
        codigo: 'Db123456',
        imagen: '/img/SostenDeporteRojo.jpg',
        color: 'Rojo',
        talla: 'S',
        material: 'Poliester'
    },
    {
        nombre: 'Pantaloneta Running',
        precio: "55.000",
        categoria: 'Deportivo',
        codigo: 'Dc123456',
        imagen: '/img/PantalonetaRunningAzul.jpg',
        color: 'Azul',
        talla: 'XL',
        material: 'Piel de Durazno'
    },
    {
        nombre: 'Camiseta Sin Mangas',
        precio: "60.000",
        categoria: 'Deportivo',
        codigo: 'Dd123456',
        imagen: '/img/CamisetaSinMangasVerde.jpg',
        color: 'Verde',
        talla: 'M',
        material: 'Poliester'
    },
    {
        nombre: 'Camiseta Fit',
        precio: "55.000",
        categoria: 'Deportivo',
        codigo: 'De123456',
        imagen: '/img/CamisetaFitAzul.jpg',
        color: 'Azul',
        talla: 'L',
        material: 'Piel de Durazno'
    },
    {
        nombre: 'Camiseta De Entrenamiento Manga Larga',
        precio: "70.000",
        categoria: 'Deportivo',
        codigo: 'Df123456',
        imagen: '/img/CamisetaDeEntrenamientoMangaLargaBlanca.jpg',
        color: 'Blanco',
        talla: 'S',
        material: 'Piel de Durazno'
    },
    {
        nombre: 'Conjunto Deportivo',
        precio: "95.000",
        categoria: 'Deportivo',
        codigo: 'Dg123456',
        imagen: '/img/ConjuntoDeportivoNegro.jpg',
        color: 'Negro',
        talla: 'M',
        material: 'Poliester'
    },
    {
        nombre: 'Saco Deportivo',
        precio: "70.000",
        categoria: 'Deportivo',
        codigo: 'Dh123456',
        imagen: '/img/SacoDeportivoRojo.jpeg',
        color: 'Rojo',
        talla: 'XL',
        material: 'Algodon'
    },
    {
        nombre: 'Sudadera Deportiva',
        precio: "75.000",
        categoria: 'Deportivo',
        codigo: 'Di123456',
        imagen: '/img/SudaderaDeportivaAzul.jpg',
        color: 'Azul',
        talla: 'L',
        material: 'Algodon'
    },
    {
        nombre: 'Licra Corta',
        precio: "50.000",
        categoria: 'Deportivo',
        codigo: 'Dj123456',
        imagen: '/img/LicraCortaVerde.jpg',
        color: 'Verde',
        talla: 'S',
        material: 'Poliester'
    },
    {
        nombre: 'Reloj',
        precio: "50.000",
        categoria: 'Acesorios',
        codigo: 'Ea123456',
        imagen: '/img/RelojNegro.jpeg',
        color: 'Negro',
        talla: 'M',
        material: 'Acero'
    },
    {
        nombre: 'Gorra',
        precio: "48.000",
        categoria: 'Acesorios',
        codigo: 'Eb123456',
        imagen: '/img/GorraRoja.jpeg',
        color: 'Rojo',
        talla: 'XL',
        material: 'Lana'
    },
    {
        nombre: 'Billetera',
        precio: "55.000",
        categoria: 'Acesorios',
        codigo: 'Ec123456',
        imagen: '/img/BilleteraVerde.jpeg',
        color: 'Verde',
        talla: 'L',
        material: 'Cuero'
    },
    {
        nombre: 'Aretes',
        precio: "25.000",
        categoria: 'Acesorios',
        codigo: 'Ed123456',
        imagen: '/img/AretesAzules.jpeg',
        color: 'Azul',
        talla: 'S',
        material: 'Acero'
    },
    {
        nombre: 'Correa',
        precio: "45.000",
        categoria: 'Acesorios',
        codigo: 'Ee123456',
        imagen: '/img/CorreaNegra.jpeg',
        color: 'Negro',
        talla: 'M',
        material: 'Cuero'
    },
    {
        nombre: 'Bolso',
        precio: "85.000",
        categoria: 'Acesorios',
        codigo: 'Ef123456',
        imagen: '/img/BolsoRojo.jpeg',
        color: 'Rojo',
        talla: 'L',
        material: 'Cuero'
    },
    {
        nombre: 'Maletin',
        precio: "75.000",
        categoria: 'Acesorios',
        codigo: 'Eg123456',
        imagen: '/img/MaletinVerde.jpg',
        color: 'Verde',
        talla: 'S',
        material: 'Poliester'
    },
    {
        nombre: 'Canguro',
        precio: "55.000",
        categoria: 'Acesorios',
        codigo: 'Eh123456',
        imagen: '/img/CanguroBlanco.jpg',
        color: 'Blanco',
        talla: 'M',
        material: 'Cuero'
    },
    {
        nombre: 'Carriel',
        precio: "65.000",
        categoria: 'Acesorios',
        codigo: 'Ei123456',
        imagen: '/img/CarrielNegro.jpeg',
        color: 'Negro',
        talla: 'XL',
        material: 'Cuero'
    },
    {
        nombre: 'Gafas De Sol',
        precio: "60.000",
        categoria: 'Hombre',
        codigo: 'Ej123456',
        imagen: '/img/GafasDeSolAzules.jpeg',
        color: 'Azul',
        talla: 'L',
        material: 'Plastico'
    },
];



const formulario = document.getElementById("registroForm");


function registrarProducto() {

    const nombre = formulario.nombre.value;
    const categoria = formulario.categoria.value;
    const imagen = formulario.imagen.value;
    const codigo = formulario.codigo.value;
    const precio = parseFloat(formulario.precio.value);
    const color = formulario.color.value;
    const talla = formulario.talla.value;
    const material = formulario.material.value;

    if (nombre === "" || categoria === "" || imagen === "" || codigo === "" || precio === "" || color === "" || talla === "" || material === "") {
        alert("Por favor, llene todos los campos antes de registrar el producto.");
        return;
    }

    if (!validarCodigo(codigo)) {

        window.location.href = "indicaciones.html";
        return;
    }

    const nuevoProducto = {
        nombre: nombre,
        precio: precio,
        categoria: categoria,
        imagen: imagen,
        codigo: codigo,
        color: color,
        talla: talla,
        material: material
    };


    productos.push(nuevoProducto);

    const localStorageProductos = JSON.stringify(productos);
    localStorage.setItem("datos",localStorageProductos);

    //localStorage.setItem('productos', JSON.stringify(productos));

    alert("Producto registrado exitosamente");

    window.location.href = "vistaProductos.html";

    console.log( "Holaaa",productos);
}
function limpiarCampos() {
    formulario.reset();
}

function validarCodigo(codigo) {
    var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d.*\d)[A-Za-z\d]{8,}$/;
    return regex.test(codigo);
}

function volverAtras() {
    window.history.back();
}



let tarjetasContainer = document.querySelector('.tarjetas');
const elementosPorPagina = 15;
let paginaActual = 1;


function crearTarjeta(producto) {
    return `
        <div class="tarjeta">
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>Categoría: ${producto.categoria}</p>
            <p>Precio: ${producto.precio}</p>
            <p>Código: ${producto.codigo}</p>
            <p>Color: ${producto.color}</p>
            <p>Talla: ${producto.talla}</p>
            <p>Material: ${producto.material}</p>
        </div>
    `;
}

function mostrarPagina(page) {
    if(localStorage.getItem("datos") != undefined){
        var productosGet = localStorage.getItem("datos");
        var parseProducts = JSON.parse(productosGet);
    }
    else {
        console.log("No tiene productos");
    }
    const inicioIndex = (page - 1) * elementosPorPagina;
    const finIndex = page * elementosPorPagina;

    tarjetasContainer.innerHTML = '';

    for (let i = inicioIndex; i < finIndex && i < parseProducts.length; i++) {
        const producto = parseProducts[i];
        const tarjetaHTML = crearTarjeta(producto);
        tarjetasContainer.innerHTML += tarjetaHTML;
    }

    document.getElementById('paginaActual').textContent = `Página ${page}`;

    if (page === 1) {
        paginaAnterior.style.display = 'none';
    } else {
        paginaAnterior.style.display = 'inline-block';
    }

}

function irAnteriorPagina() {
    if (paginaActual > 1) {
        paginaActual--;

        mostrarPagina(paginaActual);

    }
}

function irSiguientePagina() {
    const totalPaginas = Math.ceil(productos.length / elementosPorPagina);
    if (paginaActual < totalPaginas) {
        paginaActual++;

        mostrarPagina(paginaActual);

    }
}



mostrarPagina(paginaActual);


document.getElementById('paginaAnterior').addEventListener('click', irAnteriorPagina);
document.getElementById('paginaSiguiente').addEventListener('click', irSiguientePagina);





