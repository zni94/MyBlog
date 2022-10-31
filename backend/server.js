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
