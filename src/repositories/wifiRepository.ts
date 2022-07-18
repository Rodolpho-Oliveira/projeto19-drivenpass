import { db } from "../app/database.js";

export async function insertWifi(userId: number, title: string, name: string, password: string) {
    return await db.wifi.create({data: {userId, title, name, password}})
}

export async function getAllWifiByUserId(userId: number) {
    return await db.wifi.findMany({
        where:{
            userId: userId
        }
    })
}

export async function getWifiById(userId: number, id: number) {
    return await db.wifi.findFirst({
        where:{
            userId: userId,
            id: id
        }
    })
}

export async function deleteWifiById(userId: number, id: number) {
    const findById = await db.wifi.findFirst({
        where:{
            userId: userId,
            id: id
        }
    })
    if(!findById){
        throw {type: "Wifi not found", status: 404}
    }
    await db.wifi.deleteMany({
        where:{
            userId: userId,
            id: id
        }
    })
}

