export const theme = {
  fontFamilly: "Poppins, sans-serif",
  headerHeight: "90px",
  menuTopHeight: "60px",
  asideWidth: "225px",
  footerHeight: "40px",
  shadow: "0 2px 23px 0 rgba(0, 0, 0, 0.1), 0 2px 49px 0 rgba(0, 0, 0, 0.06)",
  shadowNav:
    "2px 0 10px 0 rgba(0, 0, 0, 0.12), 2px 0 15px 0 rgba(0, 0, 0, 0.09)",
};

export const lightTheme = {
  ...theme,
  dark: "#1A2F3A",
  light: "#fff",
};

export const darkTheme = {
  ...theme,

  dark: "#fff",
  light: "#1A2F3A",
};
