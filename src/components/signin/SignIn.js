import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
    overflow: "hidden",
  },
  header: {
    width: "1200px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    minHeight: "10vh",
    margin: "0 auto",
    "& img": {
      width: "10rem",
    },
  },
  hero: {
    background:
      'url("https://cf.shopee.vn/file/ce5b0ae4ef68c1dcd3a96a2f7b5dab55")',
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    minHeight: "37.5rem",
    width: "100%",
    display: "grid",
    placeItems: "center",
    justifyContent: "end",
    padding: "0 100px",
  },
  signInWrap: {
    background: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px 50px",
    borderRadius: "5px",
    width: "500px",
    minHeight: "400px",
    "& form": {
      padding: "10px",
      width: "100%",
      display: "grid",
      placeItems: "center",
    },
  },
  button: {
    background: "#ee4d2d",
    marginTop: "10px",
    color: "#fff",
    "&:hover": {
      background: "#e4350e",
    },
  },
  submitBtn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    "& button": {
      margin: "10px 0",
      flex: 1,
    },
  },
  socialBtn: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "& button ": {
      padding: "10px",
      margin: "10px 0",
      color: "#fff",
    },
  },
});
