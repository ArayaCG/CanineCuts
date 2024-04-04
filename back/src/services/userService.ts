import CredentialDto from "../dto/CredentialDto";
import UserDto from "../dto/UserDto";
import IUser from "../interfaces/IUser";
import { createCredentialService } from "./credentialService";

const users: IUser[] = [];

let id: number = 1;

export const createUserService = async (userData: UserDto, loginData: CredentialDto): Promise<IUser> => {
    const credentialsId = await createCredentialService(loginData);
    
    const newUser: IUser = {
        id,
        name: userData.name,
        email: userData.email,
        birthdate: userData.birthdate,
        nDni: userData.nDni,
        credentialsId,

    };
    users.push(newUser);
    id++;
    return newUser;
};

export const loginUsersService = async () => {

}
export const getUsersService = async () => {};
export const getUserService = async () => {};
