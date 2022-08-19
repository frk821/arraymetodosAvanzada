let peliculas = [
    {nombre:"Harry Potter",genero:"ciencia ficción",costo:2000},
    {nombre:"Dragon Ball Super",genero:"anime",costo:3000},
    {nombre:"Wakanda Forever",genero:"ciencia ficción",costo:5000},
    {nombre:"Django sin cadenas",genero:"ciencia ficción",costo:1500},
    {nombre:"El Viaje del Chigui",genero:"anime",costo:60}
]

let cienciaFiccion = peliculas.filter(pelicula => pelicula.genero =="ciencia ficción")

console.log(cienciaFiccion)

let costo2000 = peliculas.filter(pelicula => pelicula.costo >= 2000)
console.log(costo2000)

let anime = peliculas.filter(pelicula => pelicula.genero == "anime")
console.log(anime)
let anime3000 = anime.find(anime => anime.costo == 3000)
console.log(anime3000)

let mapeo = peliculas.map(function(pelicula) {
    return (pelicula.costo =(pelicula.costo/1000))
} )
console.log(peliculas)

let mapeoNombre = peliculas.map(function(pelicula) {
    return (pelicula.nombre ="Frank")
} )
console.log(peliculas)