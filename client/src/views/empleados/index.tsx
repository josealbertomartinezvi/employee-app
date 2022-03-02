import useEmpleados from './useEmpleados';
import CustomModal from './../../components/customModal';
import { MdSystemUpdateAlt, MdDeleteOutline, MdRemoveRedEye } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Empleados = () => {

  const { empleados, empleadoSeleccionado, eliminarEmpleado, seleccionarEmpleado, setOpen, open } = useEmpleados();
  
  return (
    <>    
      <h1>Empleados</h1>
      <CustomModal setOpen={setOpen} open={open} empleado={empleadoSeleccionado} />
      <div className="table-responsive">
        <table className="table table-dark mt-5">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Apellido</th>
              <th scope="col">Fecha de Nacimiento</th>
              <th scope="col">Edad</th>
              <th scope="col">Sexo</th>
              <th scope="col">Fecha de Ingreso</th>
              <th scope="col">Estrato</th>
              <th scope="col">Cantidad Letras</th>
              <th scope="col">Opciones</th>
            </tr>
          </thead>
          <tbody>
            {empleados.map((empleado, index) => (
              <tr key={index}>
                <th scope="row">{ index + 1 }</th>
                <td>{empleado.nombre}</td>
                <td>{empleado.apellido}</td>
                <td>{empleado.fechaNacimiento?.split('T')[0]}</td>
                <td>{empleado.edad} años</td>
                <td>{empleado.sexo}</td>
                <td>{empleado.fechaIngreso?.split('T')[0]}</td>
                <td>{empleado.estrato}</td>
                <td><button onClick={() => seleccionarEmpleado(empleado)} className="btn btn-warning"><MdRemoveRedEye /></button></td>
                <td>
                  <Link className="btn btn-primary" style={{marginRight: 2}} to={`empleado/nuevo/${empleado._id}`}><MdSystemUpdateAlt /></Link>
                  <button onClick={() => eliminarEmpleado(empleado._id as string)} className="btn btn-danger"><MdDeleteOutline /></button>
                </td>
              </tr>
            ))}
            { empleados.length === 0 && <tr><th className="text-center" colSpan={10}>No existen empleados registrados</th></tr> }
          </tbody>
        </table>
      </div>
    </>


  )
}

export default Empleados;
