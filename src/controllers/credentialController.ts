import { Request, Response } from "express";
import { createNewCredential } from "../services/credentialServices.js";

export async function createCredential(req: Request, res: Response) {
    const {url, username, password, label} = req.body
    const userId = res.locals.user
    await createNewCredential(userId, label, url, username, password)
    res.sendStatus(201)
}