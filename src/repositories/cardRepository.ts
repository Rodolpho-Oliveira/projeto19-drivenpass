import { db } from "../app/database.js";

export async function insertCard(title: string,userId: number, securityCode: string, number: string, name: string, password: string, expirationDate: string, isVirtual: boolean, type: string) {
    return await db.cards.create({data: {title, userId, securityCode, number, name, password, expirationDate, isVirtual, type}})
}

export async function checkCard(title: string, userId: number) {
    console.log(title)
    return await db.cards.findFirst({where: {
        title: title,
        userId: userId
    }})
}

export async function getAllCardByUserId(userId: number) {
    return await db.cards.findMany({
        where:{
            userId: userId
        }
    })
}

export async function getCardByid(userId: number, id: number) {
    return await db.cards.findFirst({
        where:{
            userId: userId,
            id: id
        }
    })
}

export async function deleteCardById(userId: number, id: number) {
    const findById = await db.cards.findFirst({
        where:{
            userId: userId,
            id: id
        }
    })
    if(!findById){
        throw {type: "Card not found", status: 404}
    }
    await db.cards.deleteMany({
        where:{
            userId: userId,
            id: id
        }
    })
}

