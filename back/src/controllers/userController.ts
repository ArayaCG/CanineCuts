import { Request, Response } from "express";
import { createUserService, loginUsersService, getUserService, deleteUserService } from "../services/userService";
import IUser from "../interfaces/IUser";
import IUserLogin from "../interfaces/IUserLogin";

export const createUsers = async (req: Request, res: Response) => {
    const {name, lastName, email, password, phone, direction} = req.body;
    const newUser: IUser = await createUserService({name, lastName, email, password, phone, direction});
    res.status(201).json(newUser)
};

export const loginUsers = async (req: Request, res: Response) => {
    const {email, password} = req.body;
    const loginUser: IUserLogin = await loginUsersService({email, password});
    res.status(200).json(loginUser)
};

export const getUsers = async (req: Request, res: Response) => {
    res.status(200).send(`${200}: Acá se mostraran todos los usurios`);
};

export const getUser = async (req: Request, res: Response) => {
    res.status(200).send(`${200}: Acá se obtendrá un usurio`);
};
