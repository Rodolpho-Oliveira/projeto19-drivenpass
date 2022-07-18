import Cryptr from "cryptr"
import dotenv from "dotenv"
import { deleteWifiById, getAllWifiByUserId, getWifiById, insertWifi } from "../repositories/wifiRepository.js";
dotenv.config()

export async function createNewWifi(userId:number, title: string, name: string, password: string ) {
    const cryptr = new Cryptr(process.env.KEY)
    const encryptedPassword = cryptr.encrypt(password);
    await insertWifi(userId, title, name, encryptedPassword)
}

export async function getWifi(userId:number, id?: number) {
    if(id){
        const wifi = await getWifiById(userId, id)
        if(!wifi){
            throw {type: "Wrong wifi id", status: 404}
        }
        const cryptr = new Cryptr(process.env.KEY)
        const cleanPassword = cryptr.decrypt(wifi.password)
        return {...wifi, password: cleanPassword}
    }else{
        const wifi = await getAllWifiByUserId(userId)
        const cryptr = new Cryptr(process.env.KEY)

        const passwordWifi = wifi.map(w => { 
            const cleanPassword = cryptr.decrypt(w.password)
            return { ...w, password: cleanPassword }
        }

        )
       return passwordWifi

    }
}

export async function deleteWifi(userId: number, id: number) {
    await deleteWifiById(userId, id)
}