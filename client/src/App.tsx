import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navegacion from './components/navegacion';
import Empleados from './views/empleados';
import NuevoEmpleado from './views/nuevoEmpleado';
import PaginaNoEncontrada from './views/paginaNoEncontrada';

const App = () => (
  <BrowserRouter>
    
    <Navegacion />
    
    <div className="container mt-5">
      <Routes>
        <Route path="/" element={ <Empleados /> } />
        <Route path="/empleado/nuevo" element={ <NuevoEmpleado /> } />
        <Route path="/empleado/nuevo/:id" element={ <NuevoEmpleado /> } />
        <Route path="*" element={ <PaginaNoEncontrada /> } />
      </Routes>
    </div>
    
  </BrowserRouter>
);


export default App;
