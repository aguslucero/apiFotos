import mongoose  from 'mongoose';

export async function startConnecion() {
 await mongoose.connect('mongodb+srv://Naribot:urlinja40188225@cluster0-56yrx.mongodb.net/iam?retryWrites=true&w=majority',{
     useNewUrlParser: true,
     useFindAndModify:false

 })
 .then(db => console.log('base de datos conectada'))
 .catch(err => console.log(err))
}

