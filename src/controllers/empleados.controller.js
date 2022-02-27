import mongoose from 'mongoose';
import Empleados from '../models/empleado.js';

//GET - consultar todos los empleados
export const findAllEmpleados = async (req, res) => {
	try {
		const empleados = await Empleados.find();
		res.json(empleados);
	}catch(err){
		console.log('ERROR: ' + err);
	}

};

//GET - consultar por el Id de empleado
export const findByIdv = async (req, res) => {
	try {
		const idValido = mongoose.Types.ObjectId.isValid(req.params.id);
		if(!idValido) res.status(404).json({ susses: true, message: 'Empleado no encontrado' });

		const empleados = await Empleados.findById(req.params.id);
		res.json(empleados);
	}catch(err){
		console.log('ERROR: ' + err);
	}
};

//POST - agregar empleado
export const addEmpleado = async (req, res) => {

	const nuevoEmpleado = new Empleados({
		nombre: req.body.nombre,
		apellido: req.body.apellido,
		fechaNacimiento: req.body.fechaNacimiento,
		sexo: req.body.sexo,
		fechaIngreso: req.body.fechaIngreso,
		estrato: req.body.estrato,
	});

	try{
		await nuevoEmpleado.save();
		res.send(nuevoEmpleado);
	}catch(err){
		console.log('ERROR: ' + err);
	}

};

//PUT - actualizar empleado
export const updateEmpleado = async (req, res) => {

	try{
		const idValido = mongoose.Types.ObjectId.isValid(req.params.id);
		if(!idValido) res.status(404).json({ susses: true, message: 'Empleado no encontrado' });

		const empleadoActualizado = await Empleados.findByIdAndUpdate(req.params.id, req.body, { new: true });
		res.json(empleadoActualizado);
	}catch(err){
		console.log('ERROR: ' + err);
	}

}

//DELETE - Borrar empleado
export const deleteEmpleado = async (req, res) => {
	try{
		const idValido = mongoose.Types.ObjectId.isValid(req.params.id);
		if(!idValido) res.status(404).json({ susses: true, message: 'Empleado no encontrado' });

		await Empleados.findByIdAndDelete(req.params.id);
		res.json({ susses: true, message: 'Empleado ha sido eliminado' });
	}catch(err){
		console.log('ERROR: ' + err);
	}

}