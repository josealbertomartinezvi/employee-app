import { useEffect, useState } from "react";
import { getEmpleados } from './../../services/empleados';
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

    useEffect(() => {
        hacerLlamado();
    }, [])
    
  
    return {
        empleados
    };
};
  
export default useEmpleados;