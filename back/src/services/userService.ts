import { AppDataSource, UserModel } from "../config/data-source";
import UserDto from "../dto/UserDto";
import { User } from "../entities/User";
import IUser from "../interfaces/IUser";
import { createCredentialService } from "./credentialService";

const users: IUser[] = [];
let idUser: number = 1;

export const getUsersService = async (): Promise<User[]> => {
    const allUser = await UserModel.find();
    if (!allUser) {
        throw Error("Error en la base de datos al buscar usuarios");
    } else {
        return allUser;
    }
};

export const getUserByIdService = async (id: number) : Promise<User>=> {
    const foundUser = await UserModel.findOneBy({
         id
    });
    if (!foundUser) {
        throw Error("No se encontró un usuario con ese ID en la base de datos");
    }
    return foundUser;
};

export const createUserService = async (userData: UserDto): Promise<User> => {
    const newCredential: number = await createCredentialService({
        username: userData.username,
        password: userData.password,
    });
    const user: User = await UserModel.create(userData); 
    await UserModel.save(user);
    user.credentialsId = newCredential;
    await UserModel.save(user);
    return user;
    // const newCredential: number = await createCredentialService({
    //     username: userData.username,
    //     password: userData.password,
    // });
    // const newUser: IUser = {
    //     id: idUser++,
    //     name: userData.name,
    //     email: userData.email,
    //     birthdate: userData.birthdate,
    //     nDni: userData.nDni,
    //     credentialsId: newCredential,
    // };
    // users.push(newUser);
    // return newUser;
};

export const loginUsersService = async () => {};
