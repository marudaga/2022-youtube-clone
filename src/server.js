import express from "express";
import logger from "morgan"; 
import globalRouter from "./routers/globalRouter";
//.현재위치로부터 /그 안에 routers폴더/ 안에 globalRotuer를 가져오는데 그 이름을 globalRouter라고한다.
import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";

/*첫 시작에서 json의 dependencies를 설치(npm i)
cd 현재위치(ex. 터미널의 위치를 기준으로 ./src/)로 package.json의 폴더위치로 이동한 후에 npm i 를 해야함.
./(현재위치를 기점으로 한다는 표시로 반드시 ./를 적어야함. npm ls로 설치된 패키지 확인가능
*/
/*pakage.json를 만들때 콘솔:npm init, json의 scripts의 내가 만든 js를 등록할 수 있다.
git 제작:콘솔에 git init(저장소만들기)-> github로 가서 만든다->콘솔(git remote add origin https://github의 등록한 repository의 주소를 입력한다)
*/
/*.gitignore에 /node_modules
*/

/*터미널 위치이동 명령어
cd : change directory 폴더이동
ls : list segments 현재 경로 내 파일목록
pwd : print working directory 현재경로 출력
mkdir : make directory 디렉토리 생성
rmdir : remove directory 디렉토리 제거
cp : copy 파일/디렉토리 복사
mv : move 파일/디렉토리 이동
cat : concaternate 터미널에 파일내용 출력(js나 html을 열면 소스코드가 터미널에 출력)
touch : 파일 생성 및 날짜정보 변경
sudo : 관리자 권한으로 실행*/
const PORT =4000;

const app = express();
const logger = morgan("dev");
//morgan은 request logger middle ware for node.js (설치)
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

app.use("/", globalRouter );
app.use("/videos", videoRouter);
app.use("/users", userRouter);

const handleListening = () =>
  console.log(`✅ Server listenting on port http://localhost:${PORT} 🚀`);


  app.listen(PORT, handleListening);
  //localhost:PORT을 server에 검색하면 나옴  
  //poeple's req를 기다릴 서버가 있어야 하고 그 역할을  app.listen(port,함수)이 한다.