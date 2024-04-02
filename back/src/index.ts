const nombre: string = "Gabriel";

const saludar = (name: string): string => {
    return `Hola ${name}`;
};

console.log(saludar(nombre));
console.log(saludar("Pedro"));

const calcularTotal = (quantity: number, price: number): number => {
    return quantity * price;
};

console.log(calcularTotal(10, 2));

interface IAdress {
    street: string;
    city: string;
}

interface IUser {
    name: string;
    age: number;
    email: string;
    active: boolean;
    adreess: IAdress;
}

interface IAdminUser extends IUser {
    adminSince: Date;
}

const usuario: IUser = {
    name: "Gabriel",
    age: 27,
    email: "araya@gmail.com",
    active: true,
    adreess: {
        street: "Coso",
        city: "Cosito",
    },
};

const usuarioAdmin: IAdminUser = {
    name: "Cristian",
    age: 27,
    email: "araya@gmail.com",
    active: true,
    adreess: {
        street: "Coso",
        city: "Cosito",
    },
    adminSince: new Date(),
};

console.log(usuario);
console.log(usuarioAdmin);

enum PetRole {
    PERRO = "perro",
    GATO = "gato",
}

type TPet = {
    name: string;
    age: number;
    active: boolean;
    adreess: IAdress;
    role: PetRole;
};

const pet1: TPet = {
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
