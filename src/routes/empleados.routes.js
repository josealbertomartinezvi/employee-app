import { Router } from 'express';
import { findAllEmpleados, findByIdv, addEmpleado, updateEmpleado, deleteEmpleado } from './../controllers/empleados.controller';

const router = Router();

router.get('', findAllEmpleados);
router.get('/:id', findByIdv);
router.post('/', addEmpleado);
router.put('/:id', updateEmpleado);
router.delete('/:id', deleteEmpleado);

export default router;