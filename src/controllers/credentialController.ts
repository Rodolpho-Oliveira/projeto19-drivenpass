import { Request, Response } from "express";
import { createNewCredential, deleteCredential, getCredential } from "../services/credentialServices.js";

export async function createCredential(req: Request, res: Response) {
    const {url, username, password, label} = req.body
    const userId = res.locals.user
    await createNewCredential(userId, label, url, username, password)
    res.sendStatus(201)
}

export async function getCredentials(req: Request, res: Response) {
    const {label} = req.body
    const userId = res.locals.user
    const credentials = await getCredential(userId, label)
    res.status(200).send(credentials)
}

export async function deleteCredentials(req: Request, res: Response) {
    const userId = res.locals.user
    const {id} = req.params
    await deleteCredential(userId, parseInt(id))
    res.sendStatus(200)
}