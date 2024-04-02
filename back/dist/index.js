"use strict";
const nombre = "Gabriel";
const saludar = (name) => {
    return `Hola ${name}`;
};
console.log(saludar(nombre));
console.log(saludar("Pedro"));
const calcularTotal = (quantity, price) => {
    return quantity * price;
};
console.log(calcularTotal(10, 2));
const usuario = {
    name: "Gabriel",
    age: 27,
    email: "araya@gmail.com",
    active: true,
    adreess: {
        street: "Coso",
        city: "Cosito",
    },
};
console.log(usuario);
var PetRole;
(function (PetRole) {
    PetRole["PERRO"] = "perro";
    PetRole["GATO"] = "gato";
})(PetRole || (PetRole = {}));
const pet1 = {
    name: "Lisi",
    age: 8,
    active: true,
    adreess: {
        street: "coso",
        city: "cosito",
    },
    role: PetRole.GATO,
};
console.log(pet1);
