import empleadosRouter from './empleados.routes';

const router = (app) => {
    app.use('/empleados', empleadosRouter);
}

export default router;