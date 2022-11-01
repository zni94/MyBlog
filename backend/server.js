const express = require("express");
const app = express();

const port = 5000; //React가 3000번 포트를 사용하기 때문에 node 서버가 사용할 포트넘버는 다른 넘버로 지정해준다.
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.use(express.json());
const cors = require("cors");
const { returnPath } = require("./config");
app.use(cors());

/**
 * 나중에 배포 했을 시 서버만 구동하여
 * React html을 로드한다.
 * react build 후 node server 실행
 */
//
// app.use(express.static(path.join(__dirname, "../frontend/build/")));
//
// app.get("/", (request, response) => {
//   response.sendFile(path.join(__dirname, "../frontend/build/index.html"));
// });
//

app.get("/file", (request, response) => {
  const { pageName } = request.query;

  const { spawn } = require("child_process");

  try {
    const cmd = spawn("cmd.exe", ["/c", returnPath(pageName)], {
      stdio: "inherit",
      shell: true,
      detached: false,
      windowsHide: true,
    });
  } catch (err) {
    console.error("ERROR", err);
  } finally {
    response.send("FILE OPEN");
  }
});
