import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Nav from './navigation';
import Header from './header';
import Landing from '../pages/Landing';
import Resume from '../pages/Resume';
import Projects from '../pages/Projects';
import GDrive from '../pages/GDrive';

export default function App() {
  return (
    <div>
      <div className='row'>
        <Header />
      </div>
      <div className='row'>
        <div className='col-md-2'>
          <Nav />
        </div>

        <div className='col-md-10'>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/resume" component={Resume} />
            <Route path='/projects' component={Projects} />
            <Route path='/gdrive' component={GDrive} />
          </Switch>
        </div>
      </div>
    </div>
  );
}
