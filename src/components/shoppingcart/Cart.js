import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Cart = styled.div`
  background: #f5f5f5;
  min-height: 100vh;
`;

export const HeaderContainer = styled.div`
  height: 6.25rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.09);
  display: flex;
  background: #fff;
  align-items: center;
  justify-content: space-around;
`;
export const Header = styled.div`
  max-width: 1200px;
`;
export const HeaderLeft = styled(Link)`
  display: flex;
  align-items: center;
  color: #ee4d2d;
  flex: 1;
  text-decoration: none;
  h3 {
  }
`;
export const Img = styled.img`
  width: 8.125rem;
  height: 2.875rem;
  cursor: pointer;
`;
export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;
export const ProductInfo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  max-width: 1200px;
  margin: auto;
`;
export const ProductHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: #fff;
  padding: 10px 20px;
`;
export const ProductDetail = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
  justify-content: space-between;
  width: 100%;
  background: #fff;
  padding: 10px 20px;
`;
export const Desc = styled.div`
  display: flex;
  align-items: center;
`;
export const useStyles = makeStyles({
  searchBar: {
    position: "relative",
    display: "flex",
    border: "2px solid #ee4d2d",
    flex: "1",
    borderRadius: "4px",
    "& .MuiInputBase-root": {
      width: "100%",
      "& input": {
        width: "100%",
        padding: "10px",
      },
    },
    "& button": {
      position: "absolute",
      background: "#ee4d2d",
      color: "#fff",
      right: "0",
      height: "100%",
    },
  },
});
