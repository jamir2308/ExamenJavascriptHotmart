class Persona {

    constructor(nombre, apellido, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    getDetalles (){
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Apellido: ${this.apellido}`);
        console.log(`Edad: ${this.edad}`);
    }
}

class Empleado extends Persona {

    constructor(nombre, apellido, edad, tipo){
        super(nombre, apellido, edad);
        this.tipo = tipo;
    }

    getDetalles (){
        super.detalles();
        console.log(`tipo: ${this.tipo}`);
    }

}

class Nomina {

    constructor(empleados){
        this.empleados = empleados;
    }

    calcularNomina(){
        this.empleados.forEach(element => {
            let random = Math.trunc(Math.random()*(15-5)+5);
            let tipoEmpleado = element.tipo.toUpperCase() === 'C' ? "Pertenece a Empleado de confianza" : "Pertenece a sindicato";
            let tipoSueldo =  element.tipo.toUpperCase() === 'C' ? 500 : 350;
            let descuento = element.tipo.toUpperCase() === 'C' ? 0.13 : 0.1;
            console.log(`${element.nombre} ${element.apellido} de ${element.edad} años  - ${element.tipo}  ${tipoEmpleado} con un sueldo de $${random * tipoSueldo - random * tipoSueldo * descuento} por ${random} dias trabajados` );
        });
    }

}

let empleado1 = new Empleado("Jamir", "patiño", 32, "c");
let empleado2 = new Empleado("Pedro", "Gutierrez", 28, "c");
let empleado3 = new Empleado("Sofia", "Cabarcas", 22, "s");

let nomina = new Nomina([empleado1,empleado2,empleado3]);
nomina.calcularNomina();