const hourValue = 265;
const overtimeValue = 350;
let weeklyHours = 53;

if(weeklyHours > 40){
    let extraHours = weeklyHours - 40;
    console.log(`El total a pagar por horas laborales normal (40hrs) es de: ${40*hourValue}`);
    console.log(`El total a pagar por horas horas Extras (${extraHours}hrs) es de: ${extraHours*overtimeValue}`);
} else {
    console.log(`El total a pagar por horas laborales normal (${weeklyHours}hrs) es de: ${weeklyHours * hourValue}`);
}