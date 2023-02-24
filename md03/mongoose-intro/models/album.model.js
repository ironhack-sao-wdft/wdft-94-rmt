import { model, Schema } from "mongoose";

const albumSchema = new Schema({
  name: { type: String, required: true, unique: true },
  artist: { type: Schema.Types.ObjectId, ref: "Artist" },
  tracks: [{ type: String, minlength: 1, maxlength: 52 }],
  cover: { type: String },
});

export const AlbumModel = model("Album", albumSchema);
