import {Schema, model, Document} from 'mongoose';

const Menuschema = new Schema({
    title:String,
    imagePath: String,
    description: String,
    price: Number,
    cant: Number

      
})

 interface Imenus extends Document {
    title: string ,
    imagePath: string,
    description: string,
    price: Number,
    cant: Number
}

export default model<Imenus>('Menus', Menuschema);