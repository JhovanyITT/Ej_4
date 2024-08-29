// 4.	Ordenamiento de un arreglo: Crea un arreglo de números desordenados y 
// luego ordénalo de menor a mayor utilizando algún algoritmo de ordenamiento 
// (p. ej., el método sort()).

const arregloNumeros = [100, 1, 56, 37, 0, -1, -100, 6];
const arregloNumerosOrdenados = arregloNumeros.sort(function (a, b) {
    return a - b;
});;

console.log(arregloNumerosOrdenados);