import Cryptr from "cryptr"
import dotenv from "dotenv"
import { checkCredential, getAllCrendentialById, getCrendentialByLabel, insertCredential } from "../repositories/credentialRepository.js";
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

export async function getCredential(userId:number, label?: string) {
    if(label){
        const credential = await getCrendentialByLabel(userId, label)
        if(!credential){
            throw {type: "Wrong credential label", status: 404}
        }
        const cryptr = new Cryptr(process.env.KEY)
        const cleanPassword = cryptr.decrypt(credential.password)
        return {...credential, password: cleanPassword}
    }else{
        const credentials = await getAllCrendentialById(userId)
        const cryptr = new Cryptr(process.env.KEY)

        const passwordCredential = credentials.map(cred => { 
            const cleanPassword = cryptr.decrypt(cred.password)
            return { ...cred, password: cleanPassword }
        }

        )
       return passwordCredential

    }
}