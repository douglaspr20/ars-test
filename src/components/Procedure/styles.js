export const procedureStyles = ({ breakpoints, props }) => ({
  procedureRoot: {
    display: "flex",
    margin: "15px 0 16px",
    padding: "15px 66px 17px 40px",
    borderRadius: "10px",
    backgroundColor: "#fff",

    "& div": {
      display: "block",
      margin: "0 82px 0 0",
      minWidth: "132px",

      "& span": {
        opacity: 0.7,
        fontFamily: "Open Sans",
        fontSize: "16px",
        lineHeight: 1.5,
      },

      "& p": {
        opacity: 0.7,
        fontFamily: "Open Sans",
        fontSize: "16px",
        lineHeight: 1.5,
        fontWeight: "bold",
      },
    },
  },
});
