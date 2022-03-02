import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { guardarEmpleado, getEmpleado, actualizarEmpleado } from './../../services/empleados';
import { TEmpleado, defaultValue } from './../../utils/types/empleados';

const useNuevo = () => {

    const [ empleado , setEmpleado ] = useState<TEmpleado>(defaultValue);
    const { id } = useParams();
    const navigate = useNavigate();

    const obtenerEmpleado = async () => {

        if (!id) return;

        const { data } = await getEmpleado(id as string);
        data.fechaNacimiento = data.fechaNacimiento.split('T')[0];
        data.fechaIngreso = data.fechaIngreso.split('T')[0];
        setEmpleado(data);

    }
    
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

    const actualizar = async (e: any) => {
        e.preventDefault();
        try{ 
            await actualizarEmpleado(empleado);
            alert('Empleado actualizado correctamente.');
            navigate('/');
        }catch (error) {
            console.error(error);
        }
    }

    const accion = (e: any) => id ? actualizar(e) : guardar(e); 

    useEffect(() => {
        if (!id) setEmpleado(defaultValue);
        obtenerEmpleado();
    }, [id])
    
  
    return {
        asignarValores,
        empleado,
        accion,
        id
    };
};
  
export default useNuevo;