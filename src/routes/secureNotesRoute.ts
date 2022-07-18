import { Router } from "express";
import { createSecureNotes, deleteSecureNotes, getSecureNotes } from "../controllers/secureNotesController.js";
import { validateToken } from "../middlewares/authMiddleware.js";

const SecurenoteRouter = Router()

SecurenoteRouter.post("/securenotes/create", validateToken, createSecureNotes)
SecurenoteRouter.get("/securenotes", validateToken, getSecureNotes)
SecurenoteRouter.delete("/securenotes/:id", validateToken, deleteSecureNotes)

export default SecurenoteRouter