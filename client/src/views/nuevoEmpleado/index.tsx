
const NuevoEmpleado = () => {
  return (
    <>
      <h1>Nuevo Empleado</h1>
      <form className="mt-5">
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Nombre</label>
          <div className="col-sm-5">
            <input type="text" className="form-control" name="nombre" id="nombre" placeholder="Ingrese su nombre" value="" />
          </div>
        </div>
        <div className="form-group row mt-2">
          <label className="col-sm-2 col-form-label">Apellido</label>
          <div className="col-sm-5">
            <input type="text" className="form-control" name="apellido" id="apellido" placeholder="Ingrese su apellido" />
          </div>
        </div>
        <div className="form-group row mt-2">
          <label className="col-sm-2 col-form-label">Fecha de Nacimiento</label>
          <div className="col-sm-5">
            <input type="date" className="form-control" name="fechaNacimiento" id="fechaNacimiento" placeholder="Ingrese su fecha de nacimiento" />
          </div>
        </div>
        <div className="form-group row mt-2">
          <label className="col-sm-2 col-form-label">Sexo</label>
          <div className="col-sm-5">
            <select className="form-control" name="sexo" id="sexo">
              <option selected value="">SELECCIONE SEXO</option>
              <option value="MASCULINO">MASCULINO</option>
              <option value="FEMENINO">FEMENINO</option>
            </select>
          </div>
        </div>
        <div className="form-group row mt-2">
          <label className="col-sm-2 col-form-label">Fecha de Ingreso</label>
          <div className="col-sm-5">
            <input type="date" className="form-control" name="fechaIngreso" id="fechaIngreso" placeholder="Ingrese su fecha de ingreso" />
          </div>
        </div>
        <div className="form-group row mt-2">
          <label className="col-sm-2 col-form-label">Estrato</label>
          <div className="col-sm-5">
            <select className="form-control" name="estrato" id="estrato">
              <option selected value="">SELECCIONE ESTRATO</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </div>
        </div>
        <button type="submit" className="btn btn-primary mt-5">Enviar</button>
      </form>
    </>
    
  )
}

export default NuevoEmpleado;
