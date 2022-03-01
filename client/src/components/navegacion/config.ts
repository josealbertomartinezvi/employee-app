type Config = Array<{
    title: string;
    path: string;
}>;
  
export const links: Config = [
    {
      title: 'Empleado',
      path: '/',
    },
    {
      title: 'Nuevo Empleado',
      path: '/empleado/nuevo',
    },
];