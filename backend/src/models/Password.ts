import mongoose, { Document, Schema } from 'mongoose';

interface IPassword extends Document {
    title: string;
    password: string;
}

const passwordSchema: Schema = new Schema({
    title: {
        type: String,
        required: false,
    },
    password: {
        type: String,
        required: true,
    },
});

const Password = mongoose.model<IPassword>('Password', passwordSchema);

export default Password;