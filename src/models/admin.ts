import {Schema, model, Document} from 'mongoose';



const schema = new Schema({
    email:String,
    password: String
})

 interface Ifoto extends Document {
    title: string ;
    imagePath: string;
}

export default model<Ifoto>('Foto', schema);