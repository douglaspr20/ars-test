export const modalStyles = ({ breakpoints, props }) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "75%",
    maxHeight: "600px",
    overflowY: "scroll",
    padding: "40px 100px 130px 86px",
    borderRadius: "8px",
    backgroundColor: "#fff",
    position: "relative",
  },
  modalHeader: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: "45px",
  },
  addProcedure: {
    flexGrow: 0,
    margin: "8px 0 0 3.4px",
    fontFamily: "Open Sans",
    display: "flex",
    alignItems: "center",
    fontSize: "16px",
    fontWeight: "bold",
    color: "#07b284",

    "& img": {
      margin: "0 3.4px 0.3px 0",
    },
  },

  modalBody: {
    marginBottom: "42px",
  },

  procedureForm: {
    display: "flex",
    alignItem: "center",
    position: "relative",
    marginTop: "32px",
    marginBottom: "32px",
  },
  inputContainer: {
    display: "flex",
    flexDirection: "column",
    marginRight: "36px",

    "& span": {
      opacity: 0.7,
      fontFamily: "Open Sans",
      fontSize: "16px",
      lineHeight: 1.5,
      color: "#000",
    },
  },
  input: {
    height: "44px",
    maxWidth: "140px",
    borderRadius: "5px",
    border: "solid 2px #9cbeb3",
    backgroundColor: "#f6f6fb",
    fontSize: "16px",
    color: "#80868b",
    outline: "none",
  },

  deleteButton: {
    position: "absolute",
    top: 42,
    left: -50,
  },

  modalFooter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    width: "100%",
    height: "45px",
  },

  cancelButton: {
    width: "138px",
    height: "46px",
    textAlign: "center",
    gap: "10px",
    margin: "0 24px 0 0",
    padding: "16px",
    borderRadius: "8px",
    border: "solid 2px #d6d6eb",
    color: "#6e6d8c",
  },

  timeButton: {
    position: "absolute",
    top: 10,
    right: 10,
  },
});
