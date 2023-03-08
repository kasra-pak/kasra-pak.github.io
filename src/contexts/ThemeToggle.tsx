import { useState, useContext, createContext, ReactNode } from 'react';
import { DefaultTheme } from 'styled-components';

import { darkTheme, lightTheme } from '@/assets/theme';

interface ThemeSwitchContextType {
  theme: DefaultTheme;
  toggleTheme: () => void;
}

interface ThemeToggleProviderProps {
  children: ReactNode;
}

const initialValue = {
  theme: lightTheme,
  toggleTheme: () => {
    console.log('shit');
  },
};

const ThemeToggleContext = createContext<ThemeSwitchContextType>(initialValue);

const ThemeToggleProvider = ({ children }: ThemeToggleProviderProps) => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme(prevState => (prevState === lightTheme ? darkTheme : lightTheme));
  };

  return <ThemeToggleContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeToggleContext.Provider>;
};

const useThemeToggle = () => {
  return useContext(ThemeToggleContext);
};

export { ThemeToggleProvider, useThemeToggle };
