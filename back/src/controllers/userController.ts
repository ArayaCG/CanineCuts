import { Request, Response } from "express";
import { createUserService, getUserByIdService, getUsersService } from "../services/userService";
import UserDto from "../dto/UserDto";
import { User } from "../entities/User";
import { verifyCredentialsService } from "../services/credentialService";
import UserRepository from "../config/repository/UserRepository";

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
        res.status(404).json({ message: error.message });
    }
};

export const createUsers = async (req: Request, res: Response) => {
    try {
        const { name, email, username, password, birthdate, nDni }: UserDto = req.body;
        const user: User = await createUserService({ name, email, username, password, birthdate, nDni });
        res.status(201).json(user);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};

export const loginUser = async (req: Request, res: Response) => {
    const { username, password } = req.body;
    try {
        const credencial = await verifyCredentialsService({ username, password });
        if (credencial) {
            const user = await UserRepository.findOneBy({
                credentialsId: {
                    id: credencial.id,
                },
            });
            res.status(200).json({
                login: true,
                user,
            });
        }
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};
