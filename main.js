function saludar() {
    saludar = alert("!Bienvenidos a la cueva del comic!");
    console.log ("!Bienvenidos a la cueva del comic!");
}
saludar();

let NombreUsuario = prompt("Ingrese el Usuario");
let PasswordIngresado = prompt("Ingrese la contraseña");
for (let i = 0; i < 2; i++ ){
if((NombreUsuario === "Coder") &&( PasswordIngresado === "House")){
    alert("Todo correcto! podés entrar capo");
    

    break;    

} else {
        NombreUsuario = alert("Usuario y contraseña incorrectas, conectá esas neuronas!");
        NombreUsuario = prompt("Ingrese el Usuario");
        PasswordIngresado = prompt("Ingrese la contraseña");
        
}
}

let DetectiveComics = {
    nombre: "Muerte en la Familia",
    edición: "Black Label",
    disponibilidad: true,
    cantidad: 30,
    precio: 12,
    
}
console.log(DetectiveComics);

let MarvelComics = {
    nombre: "House of M",
    Edición: "Must-Have",
    disponibilidad: true,
    cantidad: 25,
    pecio: 23,
}
console.log(MarvelComics);

function Comic(editorial, nombre,edición,precio,cantidad,disponibilidad){
    this.editorial = editorial;
    this.nombre = nombre;
    this.edición = edición;
    this.precio = precio;
    this.cantidad = cantidad;
    this.disponibilidad = disponibilidad;

    this.informar = function () {
        console.log("El comic " + this.nombre + " esta disponible, no olvides de reservarlo!");
    }
}

const comic1 = new Comic("Marvel Comics", "Amazing Spiderman: La última cacería de Kraven", "Must-Have", 14, 15, "si");
const comic2 = new Comic("DC", "Batman: Año Uno", "Black Label", 12, 20, "si");
const comic3 = new Comic("DC", "Batman: La corte de los buhos", "Deluxe", 20, 11,"si" );
const comic4 = new Comic("DC", "Batman: Death Metal","Black Label" ,12.50, 7,"si" );

comic2.informar();

console.log(comic1);
console.log(comic2);
console.log(comic3);
console.log(comic4);


const arrayComics = ["Batman vs. Superman", " Maus: la historia de un sobreviviente", "Tintin y los Picaros", "Watchmen: Doomsday Clock"];
console.log("Oferta de comics: ");
console.log(arrayComics);


console.log(arrayComics[0]);
console.log(arrayComics[3]);

