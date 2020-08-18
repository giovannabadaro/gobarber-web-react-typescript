import React from 'react';

import GlobalStyle from './styles/global';
import Signin from '../src/pages/Signin';
import Signup from '../src/pages/Signup';

import {AuthProvider } from './context/AuthContext';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <AuthProvider>
      <Signin />
    </AuthProvider>
    

  </>  
);

export default App;
