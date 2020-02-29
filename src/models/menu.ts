import {Schema, model, Document} from 'mongoose';

const schema = new Schema({
    title:String,
    imagePath: String,
    description: String,
    price: Number

      
})

 interface Imenu extends Document {
    title: string ,
    imagePath: string,
    description: string,
    price: Number
}

export default model<Imenu>('Menu', schema);