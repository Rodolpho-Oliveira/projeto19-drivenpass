import { db } from "../app/database.js";

export async function insertSecureNote(userId: number, title: string, note: string) {
    return await db.secureNotes.create({data: {userId, title, note}})
}

export async function checkSecureNote(userId: number, title: string,) {
    return await db.secureNotes.findFirst({where: {
        title: title,
        userId: userId
    }})
}

export async function getAllSecureNoteByUserId(userId: number) {
    return await db.secureNotes.findMany({
        where:{
            userId: userId
        }
    })
}

export async function getSecureNoteById(userId: number, id: number) {
    return await db.secureNotes.findFirst({
        where:{
            userId: userId,
            id: id
        }
    })
}

export async function deleteSecureNote(userId: number, id: number) {
    const findById = await db.secureNotes.findFirst({
        where:{
            userId: userId,
            id: id
        }
    })
    if(!findById){
        throw {type: "Secure notes not found", status: 404}
    }
    await db.secureNotes.deleteMany({
        where:{
            userId: userId,
            id: id
        }
    })
}