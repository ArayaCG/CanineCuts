import CredentialRepository from "../repositories/CredentialRepository";
import CredentialDto from "../dto/CredentialDto";
import { Credential } from "../entities/Credential";

export const createCredentialService = async (credentialData: CredentialDto): Promise<Credential> => {
    const newCredential: Credential = new Credential();
    newCredential.username = credentialData.username;
    newCredential.password = credentialData.password;
    CredentialRepository.manager.save(newCredential);
    return newCredential;
};

export const verifyCredentialsService = async (credentialData: CredentialDto): Promise<Credential | null> => {
    const { username, password } = credentialData;
    const foundCredential: Credential | null = await CredentialRepository.findOneBy({ username });
    if (!foundCredential) {
        throw Error("El usuario no existe en la base de datos");
    } else if (foundCredential.password === password) {
        return foundCredential;
    } else {
        throw Error("Credenciales incorrectas");
    }
};
