import Cryptr from "cryptr"
import dotenv from "dotenv"
import { checkCredential, insertCredential } from "../repositories/credentialRepository.js";
dotenv.config()

export async function createNewCredential(userId: number,label: string, url: string, username: string, password: string) {
    const check = await checkCredential(label, userId)
    console.log(check)
    if(check){
        throw {type: "Credential already exist", status: 400}
    }
    const cryptr = new Cryptr(process.env.KEY)
    const encryptedPassword = cryptr.encrypt(password);
    await insertCredential(userId, url, username, label, encryptedPassword)
}