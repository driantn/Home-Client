import React from 'react';
import { Route } from 'react-router-dom';
import Homepage from 'app/pages/homepage';

const Routes = () => (
    <div>
      <main>
        <Route exact path="/" component={Homepage} />
      </main>
    </div>
);

export default Routes;