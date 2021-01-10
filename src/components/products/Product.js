import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    "&:hover": {
      transform: "scale(1.01)",
    },
  },
  media: {
    objectFit: "cover",
  },
  grid: {
    justifyContent: "space-evenly",
    margin: "auto",
    width: "75rem",
    background: "#F5F5F5",
  },
});
