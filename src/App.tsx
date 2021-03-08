import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/routes';
import { StateProvider } from './Context';
import ModalManager from './components/Modal';

function App() {
  return (
    <StateProvider>
      <BrowserRouter>
        <ModalManager />
        <Routes />
      </BrowserRouter>
    </StateProvider>
  );
}

export default App;
