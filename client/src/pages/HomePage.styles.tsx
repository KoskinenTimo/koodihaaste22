import styled from "@emotion/styled";
import { CustomText } from "../components/CustomText";

export const AppBarTitle = styled(CustomText)`
  flexGrow: 1;
  margin-right: 10%;
  margin-left: auto;
  text-align: right;
  color: ${(props) => props.theme.font};
`

export const ContentWrapper = styled.div`
  width: 95%;
  margin: 2em auto;
`

export const PageWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
`