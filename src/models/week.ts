import {Schema, model, Document} from 'mongoose';


const workableDaySchema = new Schema({
    name: String,
    number: Number,
    startHour: Number,
    finishHour: Number,
})

const weekSchema = new Schema({
    workableDays : [workableDaySchema]
})



export default model('week', weekSchema);