import { useEffect, useState } from "react";
import { getEmpleados } from './../../services/empleados';

type TEmpleado = {
    _id: string;
    nombre: string;
    apellido: string;
    fechaNacimiento: Date;
    fechaIngreso: Date;
    sexo: string;
    estrato: number;
    letras: Array<TLetra>;
}

type TLetra = {
    letras: string;
    cantidad: number;
}

const useEmpleados = () => {
    const [empleados, setEmpleados] = useState<Array<TEmpleado>>([]);

    const hacerLlamado = async () => {
        try {
            const { data } = await getEmpleados();
            setEmpleados(data);
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