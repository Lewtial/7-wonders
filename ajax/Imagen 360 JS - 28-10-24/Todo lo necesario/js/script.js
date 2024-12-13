
//seleccionamos los elementos a usar
const slider = document.querySelector('#slider')
const canvas = document.querySelector('#canvas')
// agregamos el evento listener en input
slider.addEventListener('input', handleInputSlider)
const ctx = canvas.getContext('2d')
// creamos un arreglo donde se almacenaran las imagenes 
const images = [];
/**
* Cargamos las imagenes por medio del evento window load
* de esta forma las imagenes se cargan en background y la pagina
* termina de cargar antes.
**/
window.addEventListener('load', pageLoaded)
    // Recorremos las 18 imagenes para mostrar en el image
function pageLoaded (){
    for (let i = 1; i <= 39; i += 1 ){
        const number = i.toString().padStart(2, '00')
        const url = `./image/${number}.png`
        const image = new Image()
        image.src = url
        image.addEventListener('load', () => {
            images[i] = image
            // si el indice es igual a 1 cargamos la image
            if (i === 1) {
                loadImage(i)
            }
        })
    }
}

function loadImage(index){
    /** 
    /* Recibe 5 parametros:
    /* indice de la imagen, x, y, tamaños ancho y alto 
    **/
    ctx.drawImage(images[index], 0, 0, canvas.clientWidth, canvas.clientHeight)
}

// funcion para el input slider
function handleInputSlider(){
    console.log(this.value)
    loadImage(this.value)
}
        