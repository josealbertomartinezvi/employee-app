import { useState } from "react";
import { guardarEmpleado } from './../../services/empleados';
import { TEmpleado, defaultValue } from './../../utils/types/empleados';

const useNuevo = () => {

    const [ empleado , setEmpleado ] = useState<TEmpleado>(defaultValue);
    
    const asignarValores = ( { target }: any ) => {
        setEmpleado({
            ...empleado,
            [ target.name ]: target.value
        });
    };

    const guardar = async (e: any) => {
        e.preventDefault();

        try{ 
            await guardarEmpleado(empleado);
            alert('Empleado registrado correctamente.');
            setEmpleado(defaultValue);
        }catch (error) {
            console.error(error);
        }
    }
  
    return {
        asignarValores,
        empleado,
        guardar
    };
};
  
export default useNuevo;