import { Router } from "express";
import { createCredential } from "../controllers/credentialController.js";
import { validateToken } from "../middlewares/authMiddleware.js";

const credentialRouter = Router()

credentialRouter.post("/credential/create", validateToken, createCredential)

export default credentialRouter