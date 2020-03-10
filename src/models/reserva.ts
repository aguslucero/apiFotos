import {Schema, model, Document} from 'mongoose';



const schema = new Schema({
    nombre:String,
    apellido: String,
    dia: String,
    hora: String,
    personas: Number,
    telefono: String
})

 interface Ireserva extends Document {
    nombre:string,
    apellido: string,
    dia: string,
    hora: string,
    personas: string,
    telefono: string
}

export default model<Ireserva>('reserva', schema);