// Variables

const carrito = document.querySelector ('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarrito = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
cargarEventListeners();
function cargarEventListeners(){
// Cuando agregas un curso presionando "Agregar al carrito "
    listaCursos.addEventListener('click', agregarCurso)w
}


//Funciones

function agregarCurso(e){
    e.preventDefault();


    if(e.target.classList.contains('agregar-carrito')){
        console.log(e.target)

    }
}

// Lee el Contenido de la HTML al que le dimos Click
