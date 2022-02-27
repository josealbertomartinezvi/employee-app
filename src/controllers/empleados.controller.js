import Empleados from '../models/empleado.js';

//GET - consultar todos los empleados
export const findAllEmpleados = (req, res) => {
	// Empleados.find((err, empleado) => {
	// 	if (!err) {
	// 		res.send(empleado);
	// 	} else {
	// 		console.log('ERROR: ' + err);
	// 	}
	// });
    res.send('empleados')
};

//GET - consultar por el Id de empleado
export const findByIdv = (req, res) => {

};

//POST - agregar empleado
export const addEmpleado = (req, res) => {
	console.log('POST');
	console.log(req.body);
	let empleado = new Empleados({
		nombre: req.body.nombre,
		apellido: req.body.apellido,
		edad: req.body.edad,
		genero: req.body.genero
	});

	empleado.save(function (err) {
		if (!err) {
			console.log('Created');
		} else {
			console.log('ERROR: ' + err);
		}
	});

	res.send(empleado);
};

//PUT - actualizar empleado
export const updateEmpleado = (req, res) => {

}

//DELETE - Borrar empleado
export const deleteEmpleado = (req, res) => {

}