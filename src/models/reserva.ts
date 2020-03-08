import {Schema, model, Document} from 'mongoose';



const schema = new Schema({
    nombre:String,
    apellido: String,
    dia: String,
    Hora: String,
})

 interface Ireserva extends Document {
    nombre:string,
    apellido: string,
    dia: string,
    Hora: string,
}

export default model<Ireserva>('reserva', schema);