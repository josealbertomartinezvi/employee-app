
const Empleados = () => {

  return (
    <>    
      <h1>Empleados</h1>
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
          {[].map( (empleado, index) => (
            <tr key={index}>
              <th scope="row">{ index }</th>
              <td>{'empleado.nombre'}</td>
              <td>{'empleado.apellido'}</td>
              <td>{'empleado.fechaNacimiento'}</td>
              <td></td>
              <td>{'empleado.sexo'}</td>
              <td>{'empleado.fechaIngreso'}</td>
              <td>{'empleado.estrato'}</td>
              <td></td>
              <td></td>
            </tr>
          ))}
          { [].length == 0 && <tr><th className="text-center" colSpan={10}>No existen empleados registrados</th></tr> }
        </tbody>
      </table>
    </>


  )
}

export default Empleados;
