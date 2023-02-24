import express from "express";
import { AlbumModel } from "../models/album.model.js";
import { ArtistModel } from "../models/artist.model.js";

const artistRouter = express.Router();

artistRouter.post("/", async (req, res) => {
  try {
    const artist = await ArtistModel.create({ ...req.body });

    return res.status(201).json(artist);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

artistRouter.get("/", async (req, res) => {
  try {
    const artists = await ArtistModel.find({});

    return res.status(200).json(artists);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

artistRouter.get("/:artistId", async (req, res) => {
  try {
    const { artistId } = req.params;

    const artist = await ArtistModel.findOne({ _id: artistId }).populate(
      "albums"
    );

    return res.status(200).json(artist);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

artistRouter.put("/:artistId", async (req, res) => {
  try {
    const { artistId } = req.params;

    const updatedArtist = await ArtistModel.findOneAndUpdate(
      { _id: artistId },
      { ...req.body },
      { runValidators: true, new: true }
    );

    return res.status(200).json(updatedArtist);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

artistRouter.delete("/:artistId", async (req, res) => {
  try {
    const { artistId } = req.params;

    const deletedArtist = await ArtistModel.deleteOne({ _id: artistId });

    // Esse edita tudo
    await AlbumModel.updateMany(
      { artist: artistId },
      { artist: "63f8c749eb21c7f1b76893bb" }
    );

    // Ou esse, que apaga tudo
    // await AlbumModel.deleteMany({ artist: artistId });

    return res.status(200).json(deletedArtist);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

export { artistRouter };
