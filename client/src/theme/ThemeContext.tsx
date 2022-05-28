import React, { createContext, useContext, useEffect, useState } from "react";
import { ThemeProvider as MuiThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';

type Theme = "light" | "dark";
type Styles = {
  background: string;
  font: string;
}

type MuiThemeType = {
  palette: {
    primary: {
      main: string,
    },
    secondary: {
      main: string,
    },
  }
}

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
  styles:Styles;
};

export const themes = {
  light: {
    background: '#DADDD8',
    font: '#4B5842'
  },
  dark: {
    background: '#4B5842',
    font: '#DADDD8'
  }
}

export const initMuiTheme = createTheme({
  palette: {
    primary: {
      main: '#4B5842',
    },
    secondary: {
      main: '#DADDD8',
    },
  }
});

export const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType)

export const ThemeProvider = ({ children }: any) => {
  const [ theme, setTheme ] = useState<Theme>("light");
  const [ styles, setStyles ] = useState<Styles>(themes.light);
  const [ muiTheme, setMuiTheme ] = useState<MuiThemeType>(initMuiTheme)

  useEffect(() => {
    if (theme === "light") {
      const theme = createTheme({
        palette: {
          primary: {
            main: '#4B5842',
          },
          secondary: {
            main: '#DADDD8',
          },
        }
      });
      setMuiTheme(theme);
      setStyles(themes.light)
    } else {
      const theme = createTheme({
        palette: {
          primary: {
            main: '#DADDD8',
          },
          secondary: {
            main: '#4B5842',
          },
        }
      });
      setStyles(themes.dark)
      setMuiTheme(theme)
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <ThemeContext.Provider value={{ theme,toggleTheme,styles }}>
      <MuiThemeProvider theme={muiTheme}>    
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  )
}