import styled from "styled-components";
import { CustomText } from "../components/CustomText";

export const MainTitle = styled(CustomText)`
  padding: .5em;
  background-color: ${(props) => props.styles.background};
`

export const LoadingIconWrapper = styled.div`
  width: 50px;
  padding: 0;
  margin: 5em auto;
`

export const NoResultsWrapper = styled(CustomText)`
  padding: .8em .8em .8em .4em;
  background-color: ${(props) => props.styles.background};
`