import express from "express";
import { edit, remove ,see, logout } from "../controllers/userController";
//usersController이니까 userRouter의 값들이 들어간다.
const userRouter = express.Router();

userRouter.get("/:id", see);
userRouter.get("/logout", logout);
userRouter.get("/edit",edit);
userRouter.get("/remove",remove);

export default userRouter;
