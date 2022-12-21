const hueColor = "201";
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
  bodyColor: `hsl(${hueColor}, 1%, 98%)`,
  navColor: `hsl(${hueColor}, 60%, 99%)`,
  firstColor: `hsl(${hueColor}, 69%, 61%)`,
  secondColor: `hsl(${hueColor}, 69%, 61%)`,
  firstColorAlt: `hsl(${hueColor}, 57%, 53%)`,
  firstColorLighter: `hsl(${hueColor}, 92%, 85%)`,
  titleColor: `hsl(${hueColor}, 8%, 15%)`,
  textColor: `hsl(${hueColor}, 8%, 45%)`,
  textColorLight: `hsl(${hueColor}, 8%, 65%)`,
  inputColor: `hsl(${hueColor}, 70%, 96%)`,
  containerColor: "#FFF",
  scrollBarColor: `hsl(${hueColor}, 12%, 90%)`,
  scrollThumbColor: `hsl(${hueColor}, 12%, 80%)`,
  transparency: `hsla(${hueColor}, 20%, 80%, 0.1)`,
};

export const darkTheme = {
  ...theme,
  firstColor: `hsl(${hueColor}, 69%, 61%)`,
  bodyColor: `hsl(${hueColor}, 20%, 15%)`,
  navColor: `hsl(${hueColor}, 28%, 12%)`,
  secondColor: `hsl(${hueColor},30%, 8%)`,
  firstColorAlt: `hsl(${hueColor}, 57%, 53%)`,
  firstColorLighter: `hsl(${hueColor}, 92%, 85%)`,
  titleColor: `hsl(${hueColor}, 8%, 95%)`,
  textColor: `hsl(${hueColor},  8%, 75%)`,
  inputColor: `hsl(${hueColor}, 29%, 16%)`,
  containerColor: `hsl(${hueColor},  29%, 16%)`,
  scrollBarColor: `hsl(${hueColor},12%, 48%)`,
  scrollThumbColor: `hsl(${hueColor}, 12%, 36%)`,
  transparency: `hsla(${hueColor}, 60%, 80%, 0.1)`,
};
