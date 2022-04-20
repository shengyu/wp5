import { ChakraProvider } from '@chakra-ui/react';
import CsvDemo from 'components/CsvDemo';
import React from 'react';
import './App.css';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <CsvDemo />
      </div>
    </ChakraProvider>
  );
}

export default App;
