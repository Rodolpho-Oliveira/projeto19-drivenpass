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