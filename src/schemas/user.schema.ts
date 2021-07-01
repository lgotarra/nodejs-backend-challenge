import { AutoIncrementID } from "@typegoose/auto-increment";
import mongoose, {Schema, Document} from "mongoose";

export interface IUser extends Document {
    _id: number;
    name: string;
    password: string;
}

const UserSchema: Schema = new Schema ({
    _id: { type: Number, index: { unique: true } },
    name: {type: String, required: true, unique: true},
    password: {type: String, required: true, unique: true}
});

// Automatic increment of id
UserSchema.plugin(AutoIncrementID, {});

// Export for a unique db connection
// export default mongoose.model<IUser>("User", UserSchema);

// Export for multiple db connections. Need to add the model to desired db
export default UserSchema;
