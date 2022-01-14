import { ChakraProvider } from '@chakra-ui/react';
import TableDemo from 'components/TableDemo';
import React from 'react';
import './App.css';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <TableDemo />
      </div>
    </ChakraProvider>
  );
}

export default App;
