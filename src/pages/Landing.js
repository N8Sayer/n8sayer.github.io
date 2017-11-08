import React, { Component } from 'react';

const Landing = props => {
  const date = new Date();
  const year = date.getYear();
  const birthDate = new Date(1989,8,27);
  const age = Math.floor((date-birthDate)/365.25/24/60/60/1000);
  const description = `Hey there! I'm Nate Sargent, a ${age} year old Web Developer that has been designing and implementing UI and UX using JavaScript since 2015. I spend the majority of my time doing Front-End work using HTML, CSS, JS, and React, but I also specialize in building Single Page Applications and interfaces using Google Apps Script (ES5) within Google's G Suite.`;
  return(
    <p>
      {description}
    </p>
  );
};

export default Landing;
