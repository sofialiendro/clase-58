const persona = {
    nombre: { // clave: "valor"
        primerNombre: "Sofia",
        apellido: "Liendro",
    }
    edad: 26,
    direccion: "barrio 123", 
    tecnologias: ["html", "css"]// trailing comma al final es optativa, las demás son obligatorias
}

console.log(persona)

console.log(persona.nombre)

const frase = `${persona.nombre} vive en ${persona.direccion}`

console.log(frase)

console.log(persona.tecnologias[0])  //asi accedemos a un elemento de un array -> "HTML" en este caso


//puedo modificar propiedades:

persona.nombre = "Victoria"
persona.edad = "20"

const array = ["Sofia", 26, { banda: "britney", aniolanzamiento: 1998}, true]

array[2].banda // para acceder a Britney, objeto en la posicion 2 con la propiedad banda. "banda" es una propiedad.
