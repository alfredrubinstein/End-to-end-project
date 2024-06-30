import mongoose ,{Schema, Document} from 'mongoose';

export interface User extends Document {
    name:string;
    phone:string;
    age:number;
    email:string;
    status:boolean;
    money:string;
    active:boolean;
}

const UserSchema: Schema = new Schema ({
    name: {type: String, required: true},
    phone: {type: String, required: true},
    age: {type: Number, required: true},
    email: {type: String, required: true},
    status: {type: Boolean, required: true},
    money: {type: String, required: true},
    active: {type: Boolean, required: true},
});

export default mongoose.model <User> ('User', UserSchema);
