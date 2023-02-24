import express from "express";
import { AlbumModel } from "../models/album.model.js";
import { ArtistModel } from "../models/artist.model.js";
const albumRouter = express.Router();

albumRouter.post("/:artistId", async (req, res) => {
  try {
    const { artistId } = req.params;

    const newAlbum = await AlbumModel.create({ ...req.body, artist: artistId });

    await ArtistModel.findOneAndUpdate(
      { _id: artistId },
      { $push: { albums: newAlbum._id } },
      { new: true, runValidators: true }
    );

    return res.status(201).json(newAlbum);
  } catch (error) {
    console.log(error);
    // checking validation
    if (error.name === "ValidationError") {
      const message = Object.values(error.errors).map((value) => value.message);
      return res.status(400).json({
        error: message,
      });
    }

    if (error.code === 11000) {
      return res.status(400).json(error.message);
    }

    return res.status(500).json(error.message);
  }
});

albumRouter.get("/", async (req, res) => {
  try {
    const albums = await AlbumModel.find();

    return res.status(200).json(albums);
  } catch (error) {
    console.log(error);
    // checking validation
    if (error.name === "ValidationError") {
      const message = Object.values(error.errors).map((value) => value.message);
      return res.status(400).json({
        error: message,
      });
    }

    if (error.code === 11000) {
      return res.status(400).json(error.message);
    }

    return res.status(500).json(error.message);
  }
});

albumRouter.get("/:albumId", async (req, res) => {
  try {
    const { albumId } = req.params;

    const album = await AlbumModel.findOne({ _id: albumId }).populate("artist");

    return res.status(200).json(album);
  } catch (error) {
    console.log(error);
    // checking validation
    if (error.name === "ValidationError") {
      const message = Object.values(error.errors).map((value) => value.message);
      return res.status(400).json({
        error: message,
      });
    }

    if (error.code === 11000) {
      return res.status(400).json(error.message);
    }

    return res.status(500).json(error.message);
  }
});

albumRouter.put("/:albumId", async (req, res) => {
  try {
    const { albumId } = req.params;

    const updatedAlbum = await AlbumModel.findOneAndUpdate(
      { _id: albumId },
      { ...req.body },
      { new: true, runValidators: true }
    );

    return res.status(200).json(updatedAlbum);
  } catch (error) {
    console.log(error);
    // checking validation
    if (error.name === "ValidationError") {
      const message = Object.values(error.errors).map((value) => value.message);
      return res.status(400).json({
        error: message,
      });
    }

    if (error.code === 11000) {
      return res.status(400).json(error.message);
    }

    return res.status(500).json(error.message);
  }
});

albumRouter.delete("/:albumId", async (req, res) => {
  try {
    const { albumId } = req.params;

    const deleted = await AlbumModel.deleteOne({ _id: albumId });

    await ArtistModel.findOneAndUpdate(
      { albums: albumId },
      { $pull: { albums: albumId } },
      { runValidators: true }
    );

    return res.status(200).json(deleted);
  } catch (error) {
    console.log(error);
    // checking validation
    if (error.name === "ValidationError") {
      const message = Object.values(error.errors).map((value) => value.message);
      return res.status(400).json({
        error: message,
      });
    }

    if (error.code === 11000) {
      return res.status(400).json(error.message);
    }

    return res.status(500).json(error.message);
  }
});

export { albumRouter };
