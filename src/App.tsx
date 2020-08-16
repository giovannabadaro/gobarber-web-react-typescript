import React from 'react';
import GlobalStyle from './styles/global';
import Signin from '../src/pages/Signin';
import Signup from '../src/pages/Signup';

const App: React.FC = () => (
  <>
    <GlobalStyle />
   {/*  <Signin /> */}
    <Signup />
  </>  
);

export default App;
