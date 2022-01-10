import express from "express";
import {home, join, login} from "../controllers/userController";
import { search } from "../controllers/videoController";
//"../"는 현재폴더 밖으로 이동 ./는 폴더안으로 이동  

const globalRouter = express.Router();

globalRouter.get("/", home);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
globalRouter.get("/search", search);

export default globalRouter;
