import mongoose, { Schema, Document } from 'mongoose';

export interface IRecord extends Document {
  "key" : string;
  "value" : string;
  "createdAt" : Date;
  "counts" : Number[];
}

const RecordSchema: Schema = new Schema({
  key: { type: String, required: true },
  value: { type: String, required: true },
  createdAt: { type: Schema.Types.Date, required: true },
  counts: { type: Schema.Types.Number, required: true },
});

export default mongoose.model<IRecord>('records', RecordSchema);