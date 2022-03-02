import useNuevo from "./useNuevo";
import styles from './styles';

const NuevoEmpleado = () => {

  const { empleado, asignarValores, accion, id, errores } = useNuevo();

  return (
    <div className="text-center">
      <h1>Nuevo Empleado</h1>
      <form style={styles.form} onSubmit={accion}>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Nombre</label>
          <div className="col-sm-5">
            <input type="text" className="form-control" name="nombre" id="nombre" placeholder="Ingrese su nombre" value={empleado.nombre} onChange={asignarValores} />
            { errores.nombre && <p className="alert alert-warning form-control" style={styles.alertWarning}>{errores.nombre}</p> }
          </div>
        </div>
        <div className="form-group row mt-2">
          <label className="col-sm-2 col-form-label">Apellido</label>
          <div className="col-sm-5">
            <input type="text" className="form-control" name="apellido" id="apellido" placeholder="Ingrese su apellido" value={empleado.apellido} onChange={asignarValores} />
            { errores.apellido && <p className="alert alert-warning form-control" style={styles.alertWarning}>{errores.apellido}</p> }
          </div>
        </div>
        <div className="form-group row mt-2">
          <label className="col-sm-2 col-form-label">Fecha de Nacimiento</label>
          <div className="col-sm-5">
            <input type="date" className="form-control" name="fechaNacimiento" id="fechaNacimiento" placeholder="Ingrese su fecha de nacimiento" value={empleado.fechaNacimiento} onChange={asignarValores} />
            { errores.fechaNacimiento && <p className="alert alert-warning form-control" style={styles.alertWarning}>{errores.fechaNacimiento}</p> }
          </div>
        </div>
        <div className="form-group row mt-2">
          <label className="col-sm-2 col-form-label">Sexo</label>
          <div className="col-sm-5">
            <select className="form-control" name="sexo" id="sexo" value={empleado.sexo} defaultValue="" onChange={asignarValores}>
              <option value="">SELECCIONE SEXO</option>
              <option value="MASCULINO">MASCULINO</option>
              <option value="FEMENINO">FEMENINO</option>
            </select>
            { errores.sexo && <p className="alert alert-warning form-control" style={styles.alertWarning}>{errores.sexo}</p> }
          </div>
        </div>
        <div className="form-group row mt-2">
          <label className="col-sm-2 col-form-label">Fecha de Ingreso</label>
          <div className="col-sm-5">
            <input type="date" className="form-control" name="fechaIngreso" id="fechaIngreso" placeholder="Ingrese su fecha de ingreso" value={empleado.fechaIngreso} onChange={asignarValores} />
            { errores.fechaIngreso && <p className="alert alert-warning form-control" style={styles.alertWarning}>{errores.fechaIngreso}</p> }
          </div>
        </div>
        <div className="form-group row mt-2">
          <label className="col-sm-2 col-form-label">Estrato</label>
          <div className="col-sm-5">
            <select className="form-control" name="estrato" id="estrato" value={empleado.estrato} defaultValue="" onChange={asignarValores}>
              <option value="">SELECCIONE ESTRATO</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
            { errores.estrato && <p className="alert alert-warning form-control" style={styles.alertWarning}>{errores.estrato}</p> }
          </div>
        </div>
        <button type="submit" className="btn btn-primary mt-5">{id ? 'Actualizar' : 'Enviar'}</button>
      </form>
    </div>
    
  )
}

export default NuevoEmpleado;
