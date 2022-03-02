import Joi from "joi";

export const validarDatos = (schemaobj) => {
    return async (req, res, next) => {
        const schema = Joi.object(schemaobj);
        const { error, value } = schema.validate(req.body, {
            abortEarly: false,
            allowUnknown: true,
            stripUnknown: true,
        });

        if (error) {
            let errors = {}
            error.details.forEach((x) => {
                errors = { ...errors, [x.path]: x.message.replace(/['"]+/g, '')}
            });
            res.status(422).send(errors);
        }
        
        req.body = value;
        next();
    }
}