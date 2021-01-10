import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    background: "#F5F5F5",
    paddingTop: theme.spacing(3),
    height: "300px",
    overflow: "hidden",
  },
  container: {
    height: "100%",
    width: "1200px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  banner: {
    display: "flex",
    minHeight: "235px",
    maxHeight: "235px",
    overflow: "hidden",
    "& img": {
      objectFit: "cover",
      width: "100%",
      height: "100%",
    },
  },
  flex1: {
    flex: "2 1 0",
    width: "100%",
    height: "100%",
    overflow: "hidden",
    "&:hover": {
      "& .slick-prev": { visibility: "visible" },
      "& .slick-next": { visibility: "visible" },
    },
    "& .slick-prev": {
      fontSize: "1rem",
      position: "absolute",
      zIndex: 100,
      left: "10px",
      visibility: "hidden",
      transition: "all ease-in-out 0.3s",
    },
    "& .slick-next": {
      fontSize: "1rem",
      position: "absolute",
      zIndex: 100,
      right: "10px",
      visibility: "hidden",
      transition: "all ease-in-out 0.3s",
    },
    "& .slick-dots": {
      bottom: "5px",
      "& li": {
        filter: "invert(1)",
        "& button": {
          "&::before": {
            fontSize: "10px",
          },
        },
      },
    },
  },
  flex2: {
    height: "100%",
    width: "100%",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    marginLeft: "5px",
  },
}));
