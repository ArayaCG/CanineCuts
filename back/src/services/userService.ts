import UserDto from "../dto/UserDto";
import UserLoginDto from "../dto/UserLoginDto";
import IUser from "../interfaces/IUser";
import IUserLogin from "../interfaces/IUserLogin";

const users: IUser[] = [];

let id: number = 1;

export const createUserService = async (userData: UserDto): Promise<IUser> => {
    const newUser: IUser = {
        id,
        name: userData.name,
        lastName: userData.lastName,
        email: userData.email,
        password: userData.password,
        phone: userData.phone,
        direction: userData.direction,
    };
    users.push(newUser);
    id++;
    return newUser;
};

export const loginUsersService = async (userData: UserLoginDto): Promise<IUserLogin> => {
    let loginUser = users.find((user) => user.email === userData.email && user.password === userData.password);
    if (loginUser) {
        return loginUser;
    } else {
        return { email: "undefined", password: "undefined" };
    }
};
export const getUserService = async () => {};
export const deleteUserService = async () => {};
