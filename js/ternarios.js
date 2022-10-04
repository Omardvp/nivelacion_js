// Consologuear si Juan puede ver Mad Max

const persona = {
    nombre: "Juan",
    edad: 7
}

const pelicula = {
    titulo: "Mad Max",
    edadMinima: 16
}


// if (persona.edad >= pelicula.edadMinima) {
//     console.log('Puede ver la pelicula')
// } else {
//     console.log('A dormir!')
// }

// Ternary operator
//El operador ternario es una sintaxis reducida del metodo anterior 
// ejemplo de funcionamiento 
// condicion ? casoPositivo : casoNegativo;
// persona.edad >= pelicula.edadMinima //Condicion
//     ? console.log('Puede ver la pelicula') // Si es TRUE ejecuta esta instruccion 
//     : console.log('A dormir!'); // Si es FALSE ejecuta la otra 

const permiso = persona.edad >= pelicula.edadMinima ? 'Puede ver la pelicula' : 'A dormir!' 

    console.log(permiso)
