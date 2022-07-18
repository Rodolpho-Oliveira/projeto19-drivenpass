import { db } from "../app/database.js";

export async function insertCredential(userId: number, url: string, username: string, label: string, password: string) {
    return await db.credentials.create({data: {userId,url,username,title: label, password}})
}

export async function checkCredential(label: string, userId: number) {
    console.log(label)
    return await db.credentials.findFirst({where: {
        title: label,
        userId: userId
    }})
}

export async function getAllCrendentialByUserId(userId: number) {
    return await db.credentials.findMany({
        where:{
            userId: userId
        }
    })
}

export async function getCrendentialByLabel(userId: number, label: string) {
    return await db.credentials.findFirst({
        where:{
            userId: userId,
            title: label
        }
    })
}

export async function deleteCredentialById(userId: number, id: number) {
    const findById = await db.credentials.findFirst({
        where:{
            id: id
        }
    })
    if(!findById){
        throw {type: "Credential not found", status: 404}
    }
    await db.credentials.deleteMany({
        where:{
            userId: userId,
            id: id
        }
    })
}

