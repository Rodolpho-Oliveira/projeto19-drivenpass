import Cryptr from "cryptr"
import dotenv from "dotenv"
import { checkCard, deleteCardById, getAllCardByUserId, getCardByid, insertCard } from "../repositories/cardRepository.js"
dotenv.config()

export async function createNewCard(title: string,userId: number, securityCode: string, number: string, name: string, password: string, expirationDate: string, isVirtual: boolean, type: string) {
    const check = await checkCard(title, userId)
    console.log(check)
    if(check){
        throw {type: "Card already exist", status: 400}
    }
    if(type !== "credit" && type !== "debit" && type !== "credit and debit"){
        throw {type: "Wrong card type", status: 400}
    }
    const cryptr = new Cryptr(process.env.KEY)
    const encryptedPassword = cryptr.encrypt(password);
    const encryptedSecurityCode = cryptr.encrypt(securityCode);
    await insertCard(title, userId, encryptedSecurityCode, number, name, encryptedPassword, expirationDate, isVirtual, type)
}

export async function getCard(userId:number, id?: number) {
    if(id){
        const card = await getCardByid(userId, id)
        if(!card){
            throw {type: "Wrong card id", status: 404}
        }
        const cryptr = new Cryptr(process.env.KEY)
        const cleanPassword = cryptr.decrypt(card.password)
        return {...card, password: cleanPassword}
    }else{
        const cards = await getAllCardByUserId(userId)
        const cryptr = new Cryptr(process.env.KEY)

        const passwordCard = cards.map(card => { 
            const cleanPassword = cryptr.decrypt(card.password)
            return { ...card, password: cleanPassword }
        }

        )
       return passwordCard

    }
}

export async function deleteCard(userId: number, id: number) {
    await deleteCardById(userId, id)
}