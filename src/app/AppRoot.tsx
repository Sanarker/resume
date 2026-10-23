import React, { type JSX } from 'react';
import {
  ThemeProvider,
  CssBaseline,
  useMediaQuery,
  Box,
} from '@mui/material';

import { getTheme } from './theme';
import { ColorModeContext } from './ColorModeContext';
import TopBar from './TopBar';
import Resume from '../pages/Resume';

export default function AppRoot(): JSX.Element {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const [mode, setMode] = React.useState<'light' | 'dark'>(() => {
    return (
      (localStorage.getItem('color-mode') as 'light' | 'dark') ??
      (prefersDarkMode ? 'dark' : 'light')
    );
  });

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prev) => {
          const next = prev === 'light' ? 'dark' : 'light';
          localStorage.setItem('color-mode', next);
          return next;
        });
      },
    }),
    []
  );

  const theme = React.useMemo(() => getTheme(mode), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>

        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box className="resume-site" data-theme={mode}>
            <TopBar />
            <Box sx={{ minHeight: 'calc(100vh - 64px)' }}>
              <Resume />
            </Box>
          </Box>
        </ThemeProvider>

    </ColorModeContext.Provider>
  );
}


