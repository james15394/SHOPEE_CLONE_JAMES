import { createMuiTheme, makeStyles } from "@material-ui/core";
import styled from "styled-components";

export const ProductDetailSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background: #f5f5f5;
  width: 100%;
  min-height: 100vh;
`;
export const theme = createMuiTheme({
  palette: {
    secondary: {
      main: "#EE4D2D",
    },
  },
});
export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    width: 1200,
    margin: theme.spacing(2, 0),
    padding: theme.spacing(2, 0),
  },
  media: {
    objectFit: "contain",
    width: 500,
    height: 600,
  },
  button1: {
    border: "1px #f05d40 solid",
    background: "#FFE6DE",
    color: "#f05d40",
    textTransform: "capitalize",
  },
  button2: {
    background: " #f05d40",
    color: "#fff",
    padding: "6px 20px",
    textTransform: "capitalize",
  },
  btnGroup: {
    margin: "0 5px",
  },
  input: {
    width: "27px",
    "& *": {
      textAlign: "center",
    },
  },
}));

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  min-height: 500px;
  min-width: 400px;
  align-self: flex-start;
`;
export const Quantity = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Control = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
