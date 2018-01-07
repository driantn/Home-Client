import React from 'react';
import { Route } from 'react-router-dom';
import Menu from 'app/components/menu';
import Homepage from 'app/pages/homepage';
import About from 'app/pages/about';

const Routes = () => (
  <div>
    <Menu />
    <main>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/about" component={About} />
    </main>
  </div>
);

export default Routes;
