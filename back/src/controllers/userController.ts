import { Request, Response } from "express";
import { createUserService, loginUsersService, getUserByIdService, getUsersService } from "../services/userService";
import IUser from "../interfaces/IUser";
import UserDto from "../dto/UserDto";
import { User } from "../entities/User";

export const getUsers = async (req: Request, res: Response) => {
    try {
        const users: User[] = await getUsersService();
        res.status(200).json(users);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};

export const getUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const userById: User = await getUserByIdService(Number(id));
        res.status(200).json(userById);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};

export const createUsers = async (req: Request, res: Response) => {
    try {
        const { name, email, username, password, birthdate, nDni }: UserDto = req.body;
        const user: User = await createUserService({ name, email, username, password, birthdate, nDni });
        res.status(200).json(user);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};

export const loginUsers = async (req: Request, res: Response) => {
    res.status(200).send(`${200}: Acá se mostraran cuando se logee`);
};
