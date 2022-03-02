import { Router } from 'express';
import * as empleadosController from '../controllers/empleados.controller';
import { empleadoSchema } from '../schemas/empleados.schema';
import { validarDatos } from '../middlewares/validarDatos.middleware';

const router = Router();

router.get('', empleadosController.findAllEmpleados);
router.get('/:id', empleadosController.findByIdv);
router.post('/', validarDatos(empleadoSchema), empleadosController.addEmpleado);
router.put('/:id', validarDatos(empleadoSchema), empleadosController.updateEmpleado);
router.delete('/:id', empleadosController.deleteEmpleado);

export default router;