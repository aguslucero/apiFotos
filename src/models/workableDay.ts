import {Schema, model, Document} from 'mongoose';

const workableDaySchema = new Schema({
    name: String,
    number: Number,
    startHour: Number,
    finishHour: Number,
    breakStart: Number,
    breakFinish: Number,
    tables: Number
    })


interface IworkableDaySchema extends Document {
    name: string,
    number: number,
    startHour: number,
    finishHour: number,
    breakStart: number,
    breakFinish: number,
    tables: number

}

export default model<IworkableDaySchema>('workableDay', workableDaySchema);