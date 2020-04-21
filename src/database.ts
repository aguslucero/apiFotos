import mongoose  from 'mongoose';

export async function startConnecion() {
 await mongoose.connect('mongodb+srv://mongo123:mongo123@cluster0-56yrx.mongodb.net/test?retryWrites=true&w=majority',{
     useNewUrlParser: true,
     useFindAndModify:false

 })
 .then(db => console.log('base de datos conectada'))
 .catch(err => console.log(err))
}

