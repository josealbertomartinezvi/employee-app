import { Schema, model } from 'mongoose';
import { contarLetras } from '../utils/contarLetras';

const empleadoSchema = new Schema({
	nombre: {
		type: String, 
		required: true,
		trim: true,
	},
	apellido: {
		type: String, 
		required: true,
		trim: true,
	},
	fechaNacimiento: {
		type: Date, 
		required: true,
	},
	sexo: {
		type: String, 
		required: true,
		trim: true,
	},
	fechaIngreso: {
		type: Date, 
		required: true,
	},
	estrato: {
		type: Number,
		required: true,
	}
});

empleadoSchema.pre('init', (empleado) => {
	contarLetras(empleado);
});

export default model('empleado', empleadoSchema);