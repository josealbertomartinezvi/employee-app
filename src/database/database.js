import mongoose from 'mongoose';
import config from './../utils/config';

(async () => {
    try{
        await mongoose.connect(config.mongodbURL);
        console.log('Conexión con base de datos exitosa');
    }catch(err){
        console.log('ERROR: No es posible conectarse con la base de datos, valide que el servicio de mongo este arriba ' + err);
    }
})();
