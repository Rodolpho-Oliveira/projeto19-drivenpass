import { Router } from "express";
import { createCredential, getCredentials } from "../controllers/credentialController.js";
import { validateToken } from "../middlewares/authMiddleware.js";

const credentialRouter = Router()

credentialRouter.post("/credential/create", validateToken, createCredential)
credentialRouter.get("/credential", validateToken, getCredentials)

export default credentialRouter