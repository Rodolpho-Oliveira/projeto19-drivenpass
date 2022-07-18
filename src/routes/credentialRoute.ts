import { Router } from "express";
import { createCredential, deleteCredentials, getCredentials } from "../controllers/credentialController.js";
import { validateToken } from "../middlewares/authMiddleware.js";

const credentialRouter = Router()

credentialRouter.post("/credential/create", validateToken, createCredential)
credentialRouter.get("/credential", validateToken, getCredentials)
credentialRouter.delete("/credential/:id", validateToken, deleteCredentials)

export default credentialRouter