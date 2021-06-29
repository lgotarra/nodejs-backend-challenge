import { AutoIncrementID } from "@typegoose/auto-increment";
import mongoose, {Schema, Document} from "mongoose";

export interface IUser extends Document {
    _id: number;
    name: string;
    password: string;
}

const UserSchema: Schema = new Schema ({
    _id: {type: Number, required: false, unique: true},
    name: {type: String, required: true, unique: true},
    password: {type: String, required: true, unique: true}
});

UserSchema.plugin(AutoIncrementID, {});
export default mongoose.model<IUser>('User',UserSchema);
