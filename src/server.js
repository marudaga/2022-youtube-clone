import express from "express";
import logger from "morgan"; 
import globalRouter from "./routers/globalRouter";
//.현재위치로부터 /그 안에 routers폴더/ 안에 globalRotuer를 가져오는데 그 이름을 globalRouter라고한다.
import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";

const PORT =4000;


const app = express();
const logger = morgan("dev");
app.use(logger);

const home = (req, res) => {
  return res.send("hello");
};

const login = (req, res) => {
  return res.send("login");
};

app.get("/", home);
app.use(logger);
app.get("/login", login);

app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

const handleListening = () =>
  console.log(`✅ Server listenting on port http://localhost:${PORT} 🚀`);


  app.listen(PORT, handleListening);