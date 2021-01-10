import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    borderTop: "4px solid #ee4d2d",
    backgroundColor: "#fff",
    color: "rgba(0, 0, 0, 0.54)",

    "& a": {
      cursor: "pointer",
      "&:hover": {
        textDecoration: "none",
      },
      color: "rgba(0, 0, 0, 0.54)",
    },
  },
  box1: {
    width: "75rem",
    margin: "auto",
    marginTop: "3.75rem",
    paddingBottom: "1.875rem",
    borderBottom: "1px solid rgba(0,0,0,.09)",
    "& > h2": {
      fontSize: ".875rem",
      fontWeight: 700,
    },
    "& > h6": {
      fontSize: ".75rem",
      margin: ".625rem 0 0",
      lineHeight: 1.4,
    },
  },
  box2: {
    width: "75rem",
    margin: "3.75rem auto .625rem",
    paddingBottom: "3.75rem",
    "& > h2": {
      fontSize: ".875rem",
      fontWeight: 700,
    },
  },
  grid: {
    "& h6": {
      fontSize: ".75rem",
      fontWeight: 700,
    },
    "& a": {
      fontSize: ".75rem",
    },
  },
  box3: {
    width: "100%",
    background: "#FBFBFB",
    padding: theme.spacing(5, 0),
    "& h2": {
      fontSize: ".875rem",
      fontWeight: 700,
    },
    "& h6": {
      fontSize: ".75rem",
    },
  },
  box4: {
    padding: theme.spacing(5, 0),
    "&  p": {
      textAlign: "center",
      fontSize: ".75rem",
    },
    "&  h6": {
      textAlign: "center",
      fontSize: ".75rem",
    },
  },
}));
