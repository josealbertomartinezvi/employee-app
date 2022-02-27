import { Router } from 'express';
import * as empleadosController from './../controllers/empleados.controller';

const router = Router();

router.get('', empleadosController.findAllEmpleados);
router.get('/:id', empleadosController.findByIdv);
router.post('/', empleadosController.addEmpleado);
router.put('/:id', empleadosController.updateEmpleado);
router.delete('/:id', empleadosController.deleteEmpleado);

export default router;