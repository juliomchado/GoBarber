import React from 'react';

import SignIn from './pages/SigIn';
// import SignUp from './pages/SignUp';
import GlobalStyle from './styles/global';
import { AuthProvider } from './context/AuthContext';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
    </AuthProvider>

    <GlobalStyle />
  </>
);

export default App;