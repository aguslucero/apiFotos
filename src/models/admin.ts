import {Schema, model, Document} from 'mongoose';



const schema = new Schema({
    email:String,
    password: String
})

 interface Iadmin extends Document {
    email: string,
    password: string
}

export default model<Iadmin>('Admin', schema);