// Ejercicio 1 Cumplir Años
// Escribir una funcion que aumente mi edad en 1

let miEdad = 20;

// function cumplirAnios () { //Esta es lla forma tradicional en js//
//     //miEdad = miEdad + 1
//     //miEdad += 1
//     miEdad ++
// };

// cumplirAnios();
// cumplirAnios();


const cumplirAnios = () => {//La funcion felcha es la sintaxis en react//
    miEdad++
}

cumplirAnios();
console.log(miEdad);

//Ejercicio 2 VIDA
// Escribir una funcion recibirGolpe que reciba un parametro number
// y se reste al total de la vida

let vida = 100;

const recibirGolpe = (golpe) => {
    vida -= golpe
    if (vida < 0) {
        vida = 0
    }

}  
 
recibirGolpe(60);
recibirGolpe(60);



//Escribir la funcion curar() que regenre la vida en 50, hasta un maximo de 100

const curar = () => {
    vida += 50;
    if (vida > 100) {
        vida = 100
    }
} 

curar()

console.log(vida);

//Escribir un condicional (if) que evalue si el jugador sigue vivo o no

if (vida === 0) {
    console.log('Estás muerto')
} else {
    console.log('Está vivo')
}