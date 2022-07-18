import { Request, Response } from "express";
import { deleteSecureNote } from "../repositories/secureNotesRepository.js";
import { createNewSecureNotes, getSecureNote } from "../services/secureNotesServices.js";

export async function createSecureNotes(req: Request, res: Response) {
    const {title, note} = req.body
    const userId = res.locals.user
    await createNewSecureNotes(userId, title, note)
    res.sendStatus(201)
}

export async function getSecureNotes(req: Request, res: Response) {
    const {id} = req.body
    const userId = res.locals.user
    const secureNotes = await getSecureNote(userId, id)
    res.status(200).send(secureNotes)
}

export async function deleteSecureNotes(req: Request, res: Response) {
    const userId = res.locals.user
    const {id} = req.params
    await deleteSecureNote(userId, parseInt(id))
    res.sendStatus(200)
}