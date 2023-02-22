import * as dotenv from "dotenv";
import express from "express";

import { connectToDB } from "./config/db.config.js";
import { albumRouter } from "./routes/album.routes.js";

dotenv.config();
connectToDB();

const app = express();

app.use(express.json());

app.use("/album", albumRouter);

app.listen(Number(process.env.PORT), () => {
  console.log(`Server up and running at port ${process.env.PORT}`);
});
