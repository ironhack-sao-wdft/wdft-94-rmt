import { model, Schema } from "mongoose";

const artistSchema = new Schema({
  name: { type: String, required: true, unique: true },
  debutYear: { type: Number },
  picture: { type: String },
  isActive: { type: Boolean },
  albums: [{ type: Schema.Types.ObjectId, ref: "Album" }],
});

export const ArtistModel = model("Artist", artistSchema);
