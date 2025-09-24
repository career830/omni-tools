import { BrowserRouter, useRoutes } from 'react-router-dom';
import routesConfig from '../config/routesConfig';
import { Suspense, useState, useEffect } from 'react';
import Loading from './Loading';
import { CssBaseline, Theme, ThemeProvider } from '@mui/material';
import { CustomSnackBarProvider } from '../contexts/CustomSnackBarContext';
import { SnackbarProvider } from 'notistack';
import { tools } from '../tools';
import './index.css';
import { darkTheme, lightTheme } from '../config/muiConfig';
import ScrollToTopButton from './ScrollToTopButton';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';
import { UserTypeFilterProvider } from 'providers/UserTypeFilterProvider';
import EnglishClassHeader from './shared/EnglishClassHeader';
import EnglishClassFooter from './shared/EnglishClassFooter';
import LanguageSelector from './shared/LanguageSelector';
import './shared/EnglishClassStyles.css';

export type Mode = 'dark' | 'light' | 'system';

const AppRoutes = () => {
  const updatedRoutesConfig = [...routesConfig];
  tools.forEach((tool) => {
    updatedRoutesConfig.push({ path: tool.path, element: tool.component() });
  });
  return useRoutes(updatedRoutesConfig);
};

function App() {
  const [mode, setMode] = useState<Mode>(
    () => (localStorage.getItem('theme') || 'system') as Mode
  );
  const [theme, setTheme] = useState<Theme>(() => getTheme(mode));
  useEffect(() => setTheme(getTheme(mode)), [mode]);

  // Make sure to update the theme when the mode changes
  useEffect(() => {
    const systemDarkModeQuery = window.matchMedia(
      '(prefers-color-scheme: dark)'
    );
    const handleThemeChange = (e: MediaQueryListEvent) => {
      setTheme(e.matches ? darkTheme : lightTheme);
    };
    systemDarkModeQuery.addEventListener('change', handleThemeChange);

    return () => {
      systemDarkModeQuery.removeEventListener('change', handleThemeChange);
    };
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SnackbarProvider
          maxSnack={5}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right'
          }}
        >
          <CustomSnackBarProvider>
            <UserTypeFilterProvider>
              <BrowserRouter>
                <div className="site">
                  <EnglishClassHeader />
                  <div id="content" className="site-content">
                    <div className="ast-container">
                      <div className="language-selector-container">
                        <LanguageSelector />
                      </div>
                      <Suspense fallback={<Loading />}>
                        <AppRoutes />
                      </Suspense>
                    </div>
                  </div>
                  <EnglishClassFooter />
                </div>
              </BrowserRouter>
            </UserTypeFilterProvider>
          </CustomSnackBarProvider>
        </SnackbarProvider>
        <ScrollToTopButton />
      </ThemeProvider>
    </I18nextProvider>
  );
}

function getTheme(mode: Mode): Theme {
  switch (mode) {
    case 'dark':
      return darkTheme;
    case 'light':
      return lightTheme;
    default:
      return window.matchMedia('(prefers-color-scheme: dark)').matches
        ? darkTheme
        : lightTheme;
  }
}

function nextMode(mode: Mode): Mode {
  return mode === 'light' ? 'dark' : mode === 'dark' ? 'system' : 'light';
}

export default App;
