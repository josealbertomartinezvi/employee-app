import Joi from "joi";

const empleadoSchema = {
    nombre: Joi.string().required().empty(''),
    apellido: Joi.string().required().empty(''),
    fechaNacimiento: Joi.date().required().empty(''),
    sexo: Joi.string().required().empty(''),
    fechaIngreso: Joi.date().required().empty(''),
    estrato: Joi.string().required().empty(''),
};

const idSchema = {
    nombre: Joi.string().required().empty(''),
};

export {
    empleadoSchema,
    idSchema
};