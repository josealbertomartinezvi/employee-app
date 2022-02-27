import { Schema, model } from 'mongoose';

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

export default model('empleado', empleadoSchema);