// Ejercicio 1: Agregar el atributo peso al objeto tomas

let tomas = {
    nombre: "Tomas",
    especie: "perro",
    raza: "caniche",
    edad: 14,
};

// tomas.peso = 9 forma 1
tomas["peso"] = 9

// console.log(tomas)

// Ejercicio 2: Crea una clase o una funcion constructora que permita crear objetos tipo mascota
// con las mismas propiedades de tomas

class Mascota {
    constructor(nombre, especie, raza, edad, peso) {
        this.nombre = nombre
        this.especie = especie
        this.raza = raza
        this.edad = edad
        this.peso = peso
    }
    cumplirAnios() {
        this.edad++
    }

    hablar() {
        console.log(`${this.nombre} dice: Bow wow!`)
    }
}

// const masctoa1 = new Mascota("Pepe", "perro", "Dogo", 10, 8)

// masctoa1.cumplirAnios()
// masctoa1.hablar()
// console.log(masctoa1)

// Ejercicio 3: Usando los metodos de array, agregar varios objetos de tipo Mascota 
// al array mascotas, luego recorrer el array y buscar cual es la mascota mas joven,
// y luego cual es la mas pesada.

const mascotas = []

mascotas.push(new Mascota("Stampy", "elefante", "Indicus", 8, 6000))
mascotas.push(new Mascota("Matias", "pajaro", "Loro", 5, 0.35))
mascotas.push(new Mascota("Chat botté", "gato", "mestizo", 3, 4.5))
mascotas.push(new Mascota("Roy", "gallo", "ave", 34, 0.78))


//   Metodos: filter - map - reduce -recursion - find - sort -      //
// ---------------------------------------------------
//                filter()                            //
// const masPesado = mascotas.filter(m => m.edad >= 7) (mayor que)
// console.log(masPesado, mascotas)

// const pajaros = mascotas.filter(x => x.especie === "pajaro") (igual a)
// console.log(pajaros)

//---------------------------------------------------//
//                  map()                           //
// const multiplicaPeso = mascotas.map(x => x.peso * 2)
// console.log(multiplicaPeso)

// const pesos = mascotas.map(x => x.peso)
// console.log(pesos)

//--------------------------------------------------//
//                  reduce()                       //
// const reducer = [] (acumulador, valorActual) => nuevoAcumulador;
// const reducido = [1,2].reduce((acc, el) => acc + el, 0) ejemplo de funcionamiento
// console.log(reducido)

// ejemplo 2
// const numeros = [1,2,3,4,5]
// const sumados = numeros.reduce((acc, el) => acc + el, 0)
// console.log(sumados)

// ejemplo 3 indexacion de arreglo
// const indexed = mascotas.reduce((acc, el) => ({
//     ...acc,
//     [el.nombre]: el,
// }) , {})
// console.log(indexed['Stampy'])
// console.log(indexed['Roy'])
// console.log(indexed['Matias'])
// console.log(indexed['Chat botté'])

// //ejemplo 3: anidado
// const anidado = [1, [2,3], 4, [5]]
// // resultado [1,2,3,4,5]
// const plano = anidado.reduce((acc, el) => acc.concat(el), [])
// console.log(plano)

// -------------------------------------------//
//            recursion()            //
//ejemplo de funcionamiento
// const conteoRegresivo = (a) => {
//     if(a < 0) return
//     console.log(a)
//     return conteoRegresivo(a - 1)
// }
// conteoRegresivo(10)

// ----------------------------------------//
//               find()               //
//Funcionamiento: Devuelve el primer elemento que reuna la cindicion dada
// const found = mascotas.find((res, index) => {
//     // console.log(res)
//     // return res === 'Stampy'
//     console.log(index)
// })

// console.log(found)

// ----------------------------------------//
//               sort()               //
//Metodo para ordenar arreglos ejemplo:
// const lista = [10, 35, 110, 89, 53, 91];
// lista.sort(ordenar)
// console.log(lista)
// cuando devuelve -1 se va a situar en un indice menor que b
// cuando devuelve 0 no hay cambios
// cuando devuelve 1 se va a situar en un indice menor que a
// function ordenar(a,b) {
//     return a-b;
// }
