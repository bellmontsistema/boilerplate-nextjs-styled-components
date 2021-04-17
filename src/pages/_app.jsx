import React from 'react';

//Dependências
import { ThemeProvider } from 'styled-components';
import P from 'prop-types';

//Tema de Estilos
import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;

MyApp.propTypes = {
  Component: P.elementType.isRequired,
  pageProps: P.any,
};
