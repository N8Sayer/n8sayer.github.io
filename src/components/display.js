import React, { Component } from 'react';

const Display = props => {
  const projects = props.projects.map((project, index) => {
    return (
      <article key={index}>
        <a href={project.url}>
          <h3>{project.title}</h3>
          <img src={project.image} />
          <p>{project.description}</p>
        </a>
      </article>
    )
  });

  return (
    <div>
      {projects}
    </div>
  );
};

export default Display;
