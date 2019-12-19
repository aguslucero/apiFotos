import mongoose  from 'mongoose';

export async function startConnecion() {
 await mongoose.connect('mongodb://localhost/galeria',{
     useNewUrlParser: true,
     useFindAndModify:false

 });
console.log('base de datos conectada');
}

