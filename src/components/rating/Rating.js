import { Box } from "@material-ui/core";
import styled from "styled-components";

export const StyledOuter = styled(Box)`
  position: relative;
  display: inline-block;
  &::before {
    content: "\f005 \f005 \f005 \f005 \f005";
    font-family: "Font Awesome 5 Free";
    font-weight: 800;
    width: fit-content;
    color: #e9ecef;
  }
`;

export const StyledInner = styled(Box)`
  color: #000;
  position: absolute;
  top: 0;
  left: 0;
  width: ${({ width }) => (width ? width : 0)};
  overflow: hidden;
  &::before {
    content: "\f005 \f005 \f005 \f005 \f005";
    font-family: "Font Awesome 5 Free";
    font-weight: 800;
    color: yellow;
  }
`;
