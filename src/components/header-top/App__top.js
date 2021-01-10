import { makeStyles } from "@material-ui/core";
import styled from "styled-components";
import { createMuiTheme } from "@material-ui/core/styles";

export const Header__top = styled.div`
  display: flex;
  align-items: center;
  height: 2.125rem;
  background: #f9502f;
  .MuiSvgIcon-root {
    color: #fff;
    font-size: 1rem;
    margin: 0 5px;
  }
  a {
    text-decoration: none;
  }
  button {
    text-transform: lowercase;
    :hover {
      background: none;
    }
  }
`;
export const Header__topContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1200px;
  margin: auto;
  height: 100%;
  a,
  button {
    cursor: pointer;
    color: #fff;
  }
`;
export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#fff",
    },
  },
});

export const useStyles = makeStyles({
  root: {
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
    fontSize: "0.9rem",
    display: "flex",
    alignItems: "center",
    "& hr": {
      background: "rgba(255,255,255,0.5)",
    },
    "& a": {
      display: "flex",
      alignItems: "center",
      textTransform: "capitalize",
      "&:hover": {
        color: "rgba(255,255,255,0.8)",
      },
    },
    "& span": {
      textTransform: "capitalize",
      "&:hover": {
        color: "rgba(255,255,255,0.8)",
      },
    },
    "& .MuiButton-startIcon": {
      marginRight: "0",
    },
  },
});
