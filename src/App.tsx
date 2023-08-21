import React from 'react';
import { Box, ColorModeScript } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/provider';
import theme from './theme/ChakraTheme';
import Expenses from './components/Expenses';

const App: React.FC = () => (
  <ChakraProvider theme={theme}>
    <ColorModeScript initialColorMode={'dark'} />
    <Box minH='100dvh' minW='100dvw' overflow='hidden'>
      <Expenses />
    </Box>
  </ChakraProvider>
);

export default App;
