import mongoose, { Schema, Document } from "mongoose";

export interface IUrl extends Document {
  originalUrl: string;
  shortUrl: string;
  urlCode: string;
}

const UrlSchema = new Schema<IUrl>({
  originalUrl: { type: String, required: true },
  shortUrl: { type: String, required: true },
  urlCode: { type: String, required: true, unique: true },
});

export default mongoose.models.Url || mongoose.model<IUrl>("Url", UrlSchema);
