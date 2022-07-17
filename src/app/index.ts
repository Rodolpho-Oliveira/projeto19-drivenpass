import express, {json} from "express";
import "express-async-errors"
import cors from "cors"
import dotenv from "dotenv"
import userRouter from "../routes/userRoute.js";
import {errorHandler} from "../middlewares/errorHandleMiddleware.js"

dotenv.config()

const app = express()

app.use(cors())
app.use(json())

app.use(userRouter)


app.use(errorHandler)

app.listen(process.env.PORT || 4000)