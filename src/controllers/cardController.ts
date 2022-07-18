import { Request, Response } from "express";
import { createNewCard, deleteCard, getCard } from "../services/cardServices.js";


export async function createCard(req: Request, res: Response) {
    const {title, securityCode, number, name, password, expirationDate, isVirtual, type} = req.body
    const userId = res.locals.user
    await createNewCard(title, userId, securityCode, number, name, password, expirationDate, isVirtual, type)
    res.sendStatus(201)
}

export async function getCards(req: Request, res: Response) {
    const {id} = req.body
    const userId = res.locals.user
    const card = await getCard(userId, id)
    res.status(200).send(card)
}

export async function deleteCards(req: Request, res: Response) {
    const userId = res.locals.user
    const {id} = req.params
    await deleteCard(userId, parseInt(id))
    res.sendStatus(200)
}