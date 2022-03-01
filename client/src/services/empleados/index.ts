import instance from './../axios-instance'

type CommonResponse = Promise<{ data: any; error: boolean }>;

const getEmpleados = async (): CommonResponse => instance.get('/empleados');

const guardarEmpleado = async ( empleado: any ): CommonResponse => instance.post('/empleados', { ...empleado })

export { getEmpleados, guardarEmpleado };