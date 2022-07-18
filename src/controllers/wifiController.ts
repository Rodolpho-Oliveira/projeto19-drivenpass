import { Request, Response } from "express";
import { createNewWifi, deleteWifi, getWifi } from "../services/wifiServices.js";


export async function createWifi(req: Request, res: Response) {
    const {name, password, title} = req.body
    const userId = res.locals.user
    await createNewWifi(userId, title, name, password)
    res.sendStatus(201)
}

export async function getWifis(req: Request, res: Response) {
    const {id} = req.body
    const userId = res.locals.user
    const Wifis = await getWifi(userId, id)
    res.status(200).send(Wifis)
}

export async function deleteWifis(req: Request, res: Response) {
    const userId = res.locals.user
    const {id} = req.params
    await deleteWifi(userId, parseInt(id))
    res.sendStatus(200)
}