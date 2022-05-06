import { ChakraProvider } from '@chakra-ui/react';
import PasswordDemo from 'components/PasswordDemo';
import React from 'react';
import './App.css';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <PasswordDemo />
      </div>
    </ChakraProvider>
  );
}

export default App;
