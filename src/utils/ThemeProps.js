import { createTheme } from "@material-ui/core/styles";

const buttonSizes = {
  widhtSm: "91px",
  heightSm: "59px",
  widhtMd: "163px",
  heightMd: "44px",
  widhtLg: "195px",
  heightLg: "44px",
  widhtXl: "240px",
  heightXl: "44px",
};

export const themeProps = createTheme({
  typography: {
    fontFamily: ["Raleway", "Open Sans"],
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontDisplay: "swap",
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        html: {
          "& body": {
            backgroundColor: "#fff",
          },
        },
      },
    },
    MuiPaper: {
      elevation1: {
        // boxShadow: 'unset',
      },
    },
    MuiButton: {
      containedPrimary: {
        background: "linear-gradient(to left, #7f00ff, #e100ff);",
        borderRadius: 14,
        textTransform: "none",
        fontSize: 16,
        fontWeight: "bold",
        padding: "11px 22px",
      },
      containedSecondary: {
        background: "3f48ad",
        borderRadius: 10,
        textTransform: "none",
        fontSize: 18,
      },
      contained: {
        "&.Mui-disabled": {
          color: "rgb(194 194 194)",
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#132C6F",
      contrastText: "#fff",
    },
    secondary: {
      main: "#3f48ad",
      contrastText: "#fff",
    },
  },

  props: {
    colors: {
      primary: "#3f48ad",
      secondary: "#3f48ad",
      warning: "#F44336",
      secondaryHover: "#c4651d",
      yellow: "#FCE01B",
      lightYellow: "#F7E287",
      lightBlue: "#8DABDE",
      white: "#fff",
      black: "#141413",
    },
    button: {
      sm: {
        width: buttonSizes.widhtSm,
        height: buttonSizes.heightSm,
        textAlign: "center",
        fontSize: "18px",
        borderRadius: "10px",
        textTransform: "none",
      },
      md: {
        width: buttonSizes.widhtMd,
        height: buttonSizes.heightMd,
        textAlign: "center",
      },
      lg: {
        width: buttonSizes.widhtLg,
        height: buttonSizes.heightLg,
        textAlign: "center",
      },
      xl: {
        width: buttonSizes.widhtXl,
        height: buttonSizes.heightXl,
        textAlign: "center",
      },
      widthAuto: {
        height: buttonSizes.heightMd,
        textAlign: "center",
      },
    },
  },
});
