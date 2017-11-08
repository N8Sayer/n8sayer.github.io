import React, { Component } from 'react';

const Resume = () => {
  return (
    <div className='resume-page'>
      <a href='https://docs.google.com/document/d/1BmR5PuFaVlTA4sJ2OIskOyy8Ms0qMSW-sOw92lhKMAk/edit?usp=sharing' className='resume-left'>
        <img src='./src/images/gdocs-light.png' height='350' />
        <span>Resume - Light Theme</span>
      </a>
      <a href='https://docs.google.com/document/d/1gabMO6t-ZUY4OYvcxp7bJ3Fpic0EfDTyUQBoxfofobQ/edit?usp=sharing' className='resume-right'>
        <img src='./src/images/gdocs-dark.png' height='350' />
        <span>Resume - Dark Theme</span>
      </a>
    </div>
  );
};

export default Resume;
