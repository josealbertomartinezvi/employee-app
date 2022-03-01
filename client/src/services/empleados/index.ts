import instance from './../axios-instance'

type CommonResponse = Promise<{ data: any; error: boolean }>;

const getEmpleados = async (): CommonResponse => instance.get('/empleados');

export { getEmpleados };