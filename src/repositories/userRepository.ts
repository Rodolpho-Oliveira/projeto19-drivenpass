import { db } from "../app/database.js";
import { CreateTaskData } from "../services/userServices.js";

export async function checkUserEmail(email: string) {
    return await db.users.findUnique({
        where: {email}
    })
}

export async function createNewUser(createUserData: CreateTaskData) {
    return await db.users.create({data: createUserData})
}