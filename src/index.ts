import app from './app';
import { startConnecion } from './database';

 async function main (){
     startConnecion();
    await app.listen(app.get('port'));
    console.log('servidor corriendo en puerto', app.get('port'));
}

main();