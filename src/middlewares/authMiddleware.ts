import { NextFunction, Request, Response } from "express";
import Joi from "joi";

export async function signUpValidation(req: Request, res: Response, next: NextFunction) {
    const signUpValidation = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(10).required()
    })
    const validation = signUpValidation.validate(req.body)
    if(validation.error){
        return res.status(401).send("Wrong infomartion")
    }

    next()
}
