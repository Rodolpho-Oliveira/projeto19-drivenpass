import { Request, Response } from "express";
import { signUpService, singInService } from "../services/userServices.js";

export async function signUp(req: Request, res: Response) {
    const {email, password}: {email: string, password: string} = req.body
    await signUpService({email, password})
    res.sendStatus(201)
}

export async function signIn(req: Request, res: Response) {
    const {email, password}: {email: string, password: string} = req.body
    const token = await singInService({email, password})
    res.status(200).send(token)
}