import { Children, createContext, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../ThemeConfig";

interface IContextProps {
  theme: String;
  setTheme: any;
  state?: any;
  dispatch?: ({ type }: { type: string }) => void;
}
export const MyThemeContext = createContext({} as IContextProps);

interface Props {
  children: any;
}

const MyThemeProvider = ({ children }: Props) => {
  let currentTheme = "light";
  const [theme, setTheme] = useState(currentTheme);

  useEffect(() => setTheme(localStorage.getItem("theme") || ""), []);

  return (
    <MyThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        {children}
      </ThemeProvider>
    </MyThemeContext.Provider>
  );
};

export default MyThemeProvider;
