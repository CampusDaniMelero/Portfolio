// App.jsx

import { useState } from 'react';
import './App.css';

// Cambios en los imports según el formato mencionado
import Skills from './componentes/skills.jsx';
import Education from './componentes/educacion.jsx';
import Contact from './componentes/contact.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <h1 className="mt-4">Daniel Melero</h1>
        <p className="lead">Desarrollador de aplicaciones web y multiplataforma</p>

        <div className="biography-section">
          <h2>Quién soy</h2>
          <p>Tengo 22 años y actualmente estoy estudiando Desarrollo de Aplicaciones Web.</p>
          <p>Me encanta trabajar en equipo y estoy deseando poder ofrecerle mis servicios como desarrollador.</p>
          <p>Mi objetivo actualmente es poder adquirir la mayor cantidad de experiencia posible</p>
        </div>

        {/* Agrega tus componentes aquí */}
        <Skills />
        <Education />
        <Contact />

        
      </div>
    </>
  );
}

export default App;
