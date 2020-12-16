import React from 'react';

import Layout from './hoc/Layout/Layout';
import BuildBurger from './containers/BurgerBuilder/BurgerBuilder';

function App() {
  return (
    <div>
      <Layout>
        <BuildBurger />
      </Layout>
    </div>
  );
}

export default App;
