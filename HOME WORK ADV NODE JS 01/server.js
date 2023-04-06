import express from "express";
import { mongo_connection } from "./mongo-connection.js";
import router from "./consts/routerConst.js";

const app = express();

app.use(express.json());

app.use(router);
app.listen(3000, async () => {
  console.log("Server is up...");
  await mongo_connection();
});
