import {Schema, model, Document} from 'mongoose';



const schema = new Schema({
    name:String,
    lastName: String,
    price: String,
    hour: String,
    phone: String,
    title: String,
    description: String,
    state: String,
    email: String
    
})

 interface Ipedido extends Document {
    name:string,
    lastName: string,
    price: string,
    hour: string,
    phone: string,
    title: string,
    description: string,
    state: string
    email: string;
}

export default model<Ipedido>('pedidos', schema);