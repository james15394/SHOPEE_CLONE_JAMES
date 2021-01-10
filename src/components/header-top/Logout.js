import React from "react";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "material-ui-popup-state/HoverMenu";
import {
  usePopupState,
  bindHover,
  bindMenu,
} from "material-ui-popup-state/hooks";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { useHistory } from "react-router-dom";
import { auth } from "../../firebase";
import Fade from "@material-ui/core/Fade";
import { useDispatch, useSelector } from "react-redux";
import { setLogOut } from "../../reducers/ProductSlice";

export default function Logout({ email }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const logOut = () => {
    dispatch(setLogOut());
    auth.signOut();

    history.push("/signup");
  };
  const setCart = () => {
    history.push("/shoppingCart");
  };
  const popupState = usePopupState({ variant: "popover", popupId: "demoMenu" });
  return (
    <div>
      <Button {...bindHover(popupState)} startIcon={<AccountCircleIcon />}>
        {email}
      </Button>
      <Menu
        {...bindMenu(popupState)}
        TransitionComponent={Fade}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <MenuItem onClick={popupState.close}>Tài khoản của tôi</MenuItem>
        <MenuItem onClick={setCart}>Đơn mua</MenuItem>
        <MenuItem onClick={logOut}>Đăng xuất</MenuItem>
      </Menu>
    </div>
  );
}
