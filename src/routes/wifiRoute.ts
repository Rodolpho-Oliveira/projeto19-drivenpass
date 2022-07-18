import { Router } from "express";
import { createWifi, deleteWifis, getWifis } from "../controllers/wifiController.js";

import { validateToken } from "../middlewares/authMiddleware.js";

const wifiRouter = Router()

wifiRouter.post("/wifi/create", validateToken, createWifi)
wifiRouter.get("/wifi", validateToken, getWifis)
wifiRouter.delete("/wifi/:id", validateToken, deleteWifis)

export default wifiRouter