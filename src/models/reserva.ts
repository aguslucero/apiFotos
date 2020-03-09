import {Schema, model, Document} from 'mongoose';



const schema = new Schema({
    nombre:String,
    apellido: String,
    dia: String,
    hora: String,
    personas: Number
})

 interface Ireserva extends Document {
    nombre:string,
    apellido: string,
    dia: string,
    hora: string,
    personas: string
}

export default model<Ireserva>('reserva', schema);