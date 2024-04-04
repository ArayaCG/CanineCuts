import CredentialDto from "../dto/CredentialDto";
import ICredential from "../interfaces/ICredential";

const credentials: ICredential[] = [];
let id: number = 1;

export const createCredentialService = async (userData: CredentialDto): Promise<number> => {
    const newCredential: ICredential = {
        id,
        username: userData.username,
        password: userData.password
    };

    credentials.push(newCredential);
    id++;
    
    return newCredential.id; 
};

export const verifyCredentialsService = async (userData: CredentialDto): Promise<number | null> => {
    const credential = credentials.find(cred => cred.username === userData.username);

    if (!credential) {
        return null;
    }

    if (credential.password === userData.password) {
        return credential.id;
    } else {
        return null;
    }
};
