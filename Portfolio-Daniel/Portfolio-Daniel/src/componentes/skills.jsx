// Skills.jsx

import React from 'react';

const Skills = () => {
  const programmingSkills = [
    'React',
    'JavaScript',
    'EcmaScript 6 (2015)',
    'Svelte',
    'Rust',
    'Angular',
    'Vite',
    // Puedes agregar más habilidades de programación si lo deseas
  ];

  const designSkills = [
    'Adobe Photoshop',
    'Adobe Illustrator',
    'Adobe Premiere',
    'Canva',
    // Puedes agregar más habilidades de diseño si lo deseas
  ];

  return (
    <div className="skills-section">
      <h2>Habilidades de Programación</h2>
      <ul>
        {programmingSkills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

      <h2>Otras Habilidades</h2>
      <ul>
        {designSkills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
