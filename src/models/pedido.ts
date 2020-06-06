import {Schema, model, Document} from 'mongoose';


const Menuschema = new Schema({
    title:String,
    imagePath: String,
    description: String,
    price: Number,
    cant: Number

      
})

const schema = new Schema({
    name:String,
    lastName: String,
    price: String,
    hour: String,
    phone: String,
    state: String,
    email: String,
    menus: [Menuschema],

    
})

 interface Ipedido extends Document {
    name:string,
    lastName: string,
    price: string,
    hour: string,
    phone: string,
    state: string
    email: string;
    menus: Menus[];
}

export default model<Ipedido>('pedidos', schema);

export class Menus { 
    title:String;
    imagePath: String;
    description: String;
    price: Number;
    cant: Number
}