import * as React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from '../theme';


export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
