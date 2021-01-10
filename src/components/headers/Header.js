import { makeStyles } from "@material-ui/core";
import styled from "styled-components";

export const HeaderSection = styled.section`
display: flex: 
flex-direction: column;
background:#F9502F;
color: #fff;
height: fit-content;
`;

export const Header__middle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: auto;
`;
export const Header__middleLogo = styled.img`
  width: 100px;
  object-fit: contain;
  height: auto;
  background: #fff;
  margin-right: 20px;
`;
export const SearchIconWrapper = styled.div`
  position: absolute;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const useStyles = makeStyles({
  badge: {
    color: "#F9502F",
    "& .MuiBadge-anchorOriginTopRightRectangle": {
      background: "#fff",
    },
  },
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    width: "100%",
    "& .MuiInputBase-root": {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      "& input": {
        width: "100%",
        background: "#fff",
        padding: "10px",
        borderRadius: "5px",
      },
      "& + button": {
        position: "absolute",
        background: "#F9502F",
        color: "#fff",
        right: "4px",

        "& .MuiSvgIcon-root": {
          fontSize: "1.2rem",
          height: "90%",
        },
      },
    },
  },
});
