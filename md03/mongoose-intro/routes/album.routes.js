import express from "express";
import { AlbumModel } from "../models/album.model.js";
const albumRouter = express.Router();

albumRouter.post("/", async (req, res) => {
  try {
    const newAlbum = await AlbumModel.create({ ...req.body });

    return res.status(201).json(newAlbum);
  } catch (err) {
    console.log(err);
  }
});

export { albumRouter };
