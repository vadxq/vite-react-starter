import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from '@/layouts';

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
};

export default App;
