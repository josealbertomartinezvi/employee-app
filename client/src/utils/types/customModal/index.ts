import { TEmpleado } from "../empleados";

export type TModal = {
    setOpen: (boolean: boolean) => void;
    open: boolean;
    empleado: TEmpleado;
}