import { useEffect, useState } from "react";
import { getEmpleados, removerEmpleado } from './../../services/empleados';
import obtenerEdad from './../../utils/edad';
import { TEmpleado } from './../../utils/types/empleados';

const useEmpleados = () => {
    const [empleados, setEmpleados] = useState<Array<TEmpleado>>([]);

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

    const actualizarEmpleado = (id: string) => {
        console.log(id)
    }

    useEffect(() => {
        hacerLlamado();
    }, []);
  
    return {
        empleados,
        actualizarEmpleado,
        eliminarEmpleado
    };
};
  
export default useEmpleados;