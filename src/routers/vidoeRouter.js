import express from "express";
import {see, edit, deleteVideo, upload} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/see", see);
videoRouter.get("/:id/edit", edit);
videoRouter.get("/:id/delete", deleteVideo);
videoRouter.get("/upload", upload);
const handleWatchVideo = (req, res) => res.send("Watch Video");


export default videoRouter;