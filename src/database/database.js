import mongoose from 'mongoose';
import config from './../utils/config';

(async () => {
    const db = await mongoose.connect(config.mongodbURL, (err, res) => {
        if(err) {
            console.log('ERROR: No es posible conectarse con la base de datos, valide que el servicio de mongo este arriba ' + err);
        } else {
            console.log('Conexión con base de datos exitosa');
        }
    });
})();
