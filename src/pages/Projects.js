import React, { Component } from 'react';

import Display from '../components/display';

const Projects = props => {
  const projects = [
    {
      title: 'Cab-Ease',
      url: 'http://www.cab-ease.com',
      description: 'This is a project I designed for a client which runs entirely on top of a Google Sheet operating as it’s back-end database, as requested by the client.',
      image: './src/images/cabease.png'
    },{
      title: 'Google Maps API',
      url: 'http://www.natesargent.com/Neighborhood-map/',
      description: 'This is a project I completed for my Udacity NanoDegree which utilizes Knockout.js, Google Maps API, and Flickr API',
      image: './src/images/maps.PNG'
    },
    {
      title: 'Overwatch Fight',
      url: 'http://www.natesargent.com/OW-Fight/battle/battle.html',
      description: 'This is my project to build a Pokemon-like game using Overwatch pixel sprites, attributes, and stats.',
      image: './src/images/owfight.png'
    },
    {
      title: 'Responsive Demo',
      url: 'http://www.natesargent.com/demo-page/demo.html',
      description: 'This is a fully responsive page I mocked up to demo for a client with a realty business.',
      image: './src/images/demo.png'
    }
  ];

  return (
    <Display projects={projects} />
  );
};

export default Projects;
