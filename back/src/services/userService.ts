import { UserModel } from "../config/data-source";
import UserDto from "../dto/UserDto";
import { Credential } from "../entities/Credential";
import { User } from "../entities/User";
import { createCredentialService } from "./credentialService";

export const getUsersService = async (): Promise<User[]> => {
    const allUser = await UserModel.find();
    if (!allUser) {
        throw Error("Error en la base de datos al buscar usuarios");
    } else {
        return allUser;
    }
};

export const getUserByIdService = async (id: number): Promise<User> => {
    const user: User | null = await UserModel.findOne({
        where: { id },
        relations: ["appointment"],
    });
    if (user) {
        return user;
    } else {
        throw new Error("No se encontró el usuario en la base de datos");
    }
};

export const createUserService = async (userData: UserDto): Promise<User> => {
    const newCredential: Credential = await createCredentialService({
        username: userData.username,
        password: userData.password,
    });
    const user: User = await UserModel.create(userData);
    await UserModel.save(user);
    user.credentialsId = newCredential;
    await UserModel.save(user);
    return user;
};
