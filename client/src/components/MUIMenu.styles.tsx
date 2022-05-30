import styled from "@emotion/styled";
import { CustomText } from "./CustomText";

export const MenuItemWrapper = styled(CustomText)`
  background: ${(props) => props.theme.background};
  width: 100%;
  min-width: 200px;
  padding: 1em;
  &:hover {
    opacity: 0.7;
  }
  &:active {
    opacity: 0.4;
  }
`