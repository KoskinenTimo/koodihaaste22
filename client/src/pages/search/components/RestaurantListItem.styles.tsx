import styled from "styled-components";
import { EmptyHeartIcon, FilledHeartIcon } from "../../../icons/common";

export const RestaurantListItemWrapper = styled.div`
  padding: 1em;
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.background};
  margin: 1em auto;
`

export const RestaurantDetailsWrapper = styled.div`
`

export const IconWrapper = styled.div`
  padding: 1em;
  cursor: pointer;
`

export const FilledHeartIconWrap = styled(FilledHeartIcon)`
  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.4;
  }
`

export const EmptyHeartIconWrap = styled(EmptyHeartIcon)`
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.4;
  }
`