let array1 = [3,2,1,1,2,3,2,3,1];
let array2 = [1,1,2,2,1,1,1,2,1];

console.log("Arreglo 1 : [");
console.log(array1.join());
console.log("]");
console.log("---------------------------------------------");
console.log("Arreglo 2 : [");
console.log(array2.join());
console.log("]");
console.log("---------------------------------------------");
for (let index = 0; index < array1.length; index++) {
    console.log(`${array1[index]} + ${array2[index]} = ${array1[index] + array2[index]}`);
    console.log(`${array1[index]} * ${array2[index]} = ${array1[index] * array2[index]}`);
    console.log("---------------------------------------------");
}
