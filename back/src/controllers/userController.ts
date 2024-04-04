import { Request, Response } from "express";
import { createUserService, loginUsersService, getUserService, getUsersService } from "../services/userService";
import IUser from "../interfaces/IUser";
import UserDto from "../dto/UserDto";
import CredentialDto from "../dto/CredentialDto";

export const createUsers = async (req: Request, res: Response) => {
    try {
        const { name, email, birthdate, nDni, credentialsId, username, password } = req.body;

        const userData: UserDto = { name, email, birthdate, nDni, credentialsId };

        const loginData: CredentialDto = { username, password };

        const newUser: IUser = await createUserService(userData, loginData);

        res.status(201).json(newUser);
    } catch (error) {
        console.error("Error al crear usuario:", error);
        res.status(500).json({ error: "Error al crear usuario" });
    }
};

export const loginUsers = async (req: Request, res: Response) => {
    res.status(200).send(`${200}: Acá se mostraran cuando se logee`);
};

export const getUsers = async (req: Request, res: Response) => {
    res.status(200).send(`${200}: Acá se mostraran todos los usurios`);
};

export const getUser = async (req: Request, res: Response) => {
    res.status(200).send(`${200}: Acá se obtendrá un usurio`);
};
