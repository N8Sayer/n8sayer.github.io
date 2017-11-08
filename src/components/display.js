import React, { Component } from 'react';

const Display = props => {
  const projects = props.projects.map((project, index) => {
    return (
      <article>
        <a key={index} href={project.url}>
          <p>{project.title}</p>
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
