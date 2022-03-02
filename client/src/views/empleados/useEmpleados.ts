import { useEffect, useState } from "react";
import { getEmpleados, removerEmpleado } from './../../services/empleados';
import obtenerEdad from './../../utils/edad';
import { defaultValue, TEmpleado } from './../../utils/types/empleados';

const useEmpleados = () => {
    const [empleados, setEmpleados] = useState<Array<TEmpleado>>([]);
    const [empleadoSeleccionado, setEmpleado] = useState<TEmpleado>(defaultValue);
    const [open, setOpen] = useState(false);

    const hacerLlamado = async () => {
        try {
            const { data } = await getEmpleados();

            const empleados = data.map((info: TEmpleado) => {
                const edad = obtenerEdad( new Date(info.fechaNacimiento) );
                return { ...info, edad };
            });

            setEmpleados(empleados);
        } catch (error) {
          console.error(error)
        }
    };

    const eliminarEmpleado = async (id: string) => {
        try{
            const { data } = await removerEmpleado(id);
            alert( data.message );
            hacerLlamado();
        }catch (error) {
            console.error(error)
        }
    }

    const seleccionarEmpleado = ( empleado: TEmpleado ) => {
        setEmpleado(empleado);
        setOpen(true);
    }

    useEffect(() => {
        hacerLlamado();
    }, []);
  
    return {
        empleados,
        empleadoSeleccionado,
        eliminarEmpleado,
        seleccionarEmpleado,
        setOpen,
        open
    };
};
  
export default useEmpleados;