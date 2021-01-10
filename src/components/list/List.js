import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  title: {
    color: "#8FC7E7",
    padding: theme.spacing(2),
    background: "#fff",
  },
  root: {
    width: "1200px",
    marginLeft: "auto",
    marginRight: "auto",
    "& .MuiCard-root": {
      height: "140px",
      width: "90px",
      paddingBottom: "10px",
      cursor: "pointer",
      "&:hover": {
        boxShadow: "2px 10px 9px rgba(255,255,255,0.1)",
      },
    },
    "& .MuiCardContent-root": {
      textAlign: "center",
    },
    "& .slick-next": {
      right: -10,
      filter: "brightness(0.5)",
      "&:hover": {
        "&::before": {
          fontSize: "30px",
          transition: "all ease-in-out 0.3s",
        },
      },
    },
    "& .slick-prev": {
      position: "absolute",
      zIndex: 3,
      left: -10,
      filter: "brightness(0.5)",
      "&:hover": {
        "&::before": {
          fontSize: "30px",
          transition: "all ease-in-out 0.3s",
        },
      },
    },

    "& .MuiCardMedia-root": {
      height: 80,
      width: 80,
      margin: "auto",
    },
    "& .MuiPaper-rounded ": {
      borderRadius: 0,
    },
  },
}));
