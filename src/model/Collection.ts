import mongoose, { model, Schema } from 'mongoose';

export interface CollectionDocument {
  _id: string;
  name: string;
  user: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const CollectionSchema = new Schema<CollectionDocument>(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

const Collection =
  mongoose.models?.Collection || model<CollectionDocument>('Collection', CollectionSchema);
export default Collection;
