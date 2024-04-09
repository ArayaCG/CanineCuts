import CredentialDto from "../dto/CredentialDto";
import ICredential from "../interfaces/ICredential";

const credentials: ICredential[] = [];
let idCredential: number = 1;

export const createCredentialService = async (userData: CredentialDto): Promise<number> => {
    const newCredential: ICredential = {
        id: idCredential++,
        username: userData.username,
        password: userData.password,
    };
    credentials.push(newCredential);
    return newCredential.id;
};

export const verifyCredentialsService = async (userData: CredentialDto): Promise<number | null> => {
    const { username, password } = userData;
    const foundCredential = credentials.find(
        (credential) => credential.username === username && credential.password === password
    );
    if (foundCredential && foundCredential.username === username && foundCredential.password === password) {
        return foundCredential.id;
    } else {
        throw Error("Credenciales incorrectas");
    }
};
