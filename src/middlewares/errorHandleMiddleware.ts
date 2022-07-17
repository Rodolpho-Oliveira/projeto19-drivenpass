import { NextFunction, Request, Response } from "express";

interface Error {
    status?: number
    type?: string
}

export async function errorHandler( error: Error, req: Request, res: Response, next: NextFunction) {
    console.log(error)
    if(error.type && error.status){
        return res.status(error.status).send(error.type)
    }
    res.sendStatus(500)
}