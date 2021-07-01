import { AutoIncrementID } from "@typegoose/auto-increment";
import mongoose, { Schema, Document } from "mongoose";

export interface IList extends Document {
  _id: number;
  name: string;
  user_id: number;
  movies: [
    {
      movie: {
        director: string;
        title: string;
      };
    }
  ];
}

const ListSchema: Schema = new Schema({
  _id: { type: Number, index: { unique: true } },
  name: { type: String, required: true },
  user_id: { type: Number, required: true },
  movies: [
    {
      movie: {
        director: { type: String, required: true },
        title: { type: String, required: true },
      },
    },
  ],
});

//Automatic increment of id
ListSchema.plugin(AutoIncrementID, {});

//Export for a unique db connection
//export default mongoose.model<IList>("List", ListSchema);

// Export for multiple db connections. Need to add the model to desired db
export default ListSchema;
