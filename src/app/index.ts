import express, {json} from "express";
import "express-async-errors"
import cors from "cors"
import dotenv from "dotenv"
import userRouter from "../routes/userRoute.js";
import {errorHandler} from "../middlewares/errorHandleMiddleware.js"
import credentialRouter from "../routes/credentialRoute.js";
import SecurenoteRouter from "../routes/secureNotesRoute.js";
import cardRouter from "../routes/cardRoute.js";

dotenv.config()

const app = express()

app.use(cors())
app.use(json())

app.use(userRouter)
app.use(credentialRouter)
app.use(SecurenoteRouter)
app.use(cardRouter)

app.use(errorHandler)

app.listen(process.env.PORT || 4000)