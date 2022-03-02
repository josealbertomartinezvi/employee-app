import instance from './../axios-instance'

type CommonResponse = Promise<{ data: any; error: boolean }>;

const getEmpleados = async (): CommonResponse => instance.get('/empleados');

const getEmpleado = async ( id: string ): CommonResponse => instance.get(`/empleados/${id}`);

const guardarEmpleado = async ( empleado: any ): CommonResponse => instance.post('/empleados', { ...empleado });

const removerEmpleado = async ( id: string ): CommonResponse => instance.delete(`/empleados/${id}`);

const actualizarEmpleado = async ( empleado: any ): CommonResponse => instance.put(`/empleados/${empleado._id}`, { ...empleado });


export { getEmpleados, guardarEmpleado, removerEmpleado, getEmpleado, actualizarEmpleado };