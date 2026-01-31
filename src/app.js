import express from "express"
import userRouter from "./routes/user.route";

const app = express();


// routes declaration

app.use('api/v1/users' , userRouter);

export default app;