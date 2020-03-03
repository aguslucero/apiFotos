import {Schema, model, Document} from 'mongoose';



const schema = new Schema({
    actived: Boolean
})

 interface itsActived extends Document {
    actived: boolean,
  
}

export default model<itsActived>('itsActived', schema);