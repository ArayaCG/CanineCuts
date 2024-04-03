import UserDto from "../dto/UserDto";
import IUser from "../interfaces/IUser";

const users: IUser[] = [];

let id: number = 1;

export const createUserService = async (userData: UserDto): Promise<IUser> => {
    const newUser: IUser = {
        id,
        name: userData.name,
        email: userData.email,
        active: userData.active,
    };
    users.push(newUser);
    id++;
    return newUser;
};
export const getUserService = async () => {};
export const deleteUserService = async () => {};
