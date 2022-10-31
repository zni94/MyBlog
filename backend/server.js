const express = require("express");
const app = express();
const path = require("path");

const port = 5000; //React가 3000번 포트를 사용하기 때문에 node 서버가 사용할 포트넘버는 다른 넘버로 지정해준다.
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.use(express.json());
const cors = require("cors");
app.use(cors());

app.use(express.static(path.join(__dirname, "../frontend/build/")));

app.get("/", (request, response) => {
  response.sendFile(path.join(__dirname, "../frontend/build/index.html"));
});

app.get("/file", (request, response) => {
  console.log("GET FILE");
  const { spawn } = require("child_process");
  const path =
    "C:\\Users\\zni94\\AppData\\Local\\JetBrains\\Toolbox\\apps\\IDEA-U\\ch-0\\222.4345.14\\bin\\idea64.exe";

  const cmd = spawn("cmd.exe", ["/c", path], {
    stdio: "inherit",
    shell: true,
    detached: true,
    windowsHide: false,
  });

  cmd.stdout.on("readable", () => {
    let chunk;
    while ((chunk = cmd.stdout.read()) !== null) {
      console.log(chunk.toString());
    }
  });
  //
  // cmd.stdout.on("data", (request, response) => {
  //   console.log("stdout :: \n", response);
  // });
});
