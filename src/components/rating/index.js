import { Typography } from "@material-ui/core";
import React from "react";
import { StyledOuter, StyledInner } from "./Rating";

const Rating = ({ rating }) => {
  const innerWidth = `${Math.round(((rating / 5) * 100) / 10) * 10}%`;
  return (
    <>
      <Typography
        variant="body1"
        display="inline"
        style={{
          marginRight: "10px",
          color: "#ee4d2d",
          textDecoration: "underline",
        }}
      >
        {rating}
      </Typography>
      <StyledOuter>
        <StyledInner width={innerWidth}>{rating}</StyledInner>
      </StyledOuter>
    </>
  );
};

export default Rating;
