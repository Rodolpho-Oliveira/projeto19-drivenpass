import { Router } from "express";
import { createCard, deleteCards, getCards } from "../controllers/cardController.js";
import { validateToken } from "../middlewares/authMiddleware.js";

const cardRouter = Router()

cardRouter.post("/card/create", validateToken, createCard)
cardRouter.get("/card", validateToken, getCards)
cardRouter.delete("/card/:id", validateToken, deleteCards)

export default cardRouter