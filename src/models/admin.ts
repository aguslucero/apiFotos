import {Schema, model, Document} from 'mongoose';



const schema = new Schema({
    email:String,
    password: String
})

 interface Ifoto extends Document {
    email: string,
    password: string
}

export default model<Ifoto>('Admin', schema);