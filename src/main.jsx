import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root.jsx'
import NotFound from './routes/not_found.jsx'

/* Fonts */
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

/* Router */
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
  },
  {
    /* Catch all */
    path: '*',
    element: <NotFound />,
    errorElement: <NotFound />,
  },
]);

/* MUI Theme */
const theme = createTheme({
  palette: {
    primary: {
      main: '#a83232', // maroon
    },
    secondary: {
      main: '#800f0f', // maroon
    },
  },
});

/* DOM */
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
