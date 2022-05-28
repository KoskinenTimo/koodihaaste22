import styled from "styled-components";
import { CustomText } from "../../components/CustomText";
import { CustomInput } from "../../components/CustomInput";
import { CustomButton } from "../../components/CustomButton";


export const MainPageWrapper = styled.div`
  width:100%;
  max-width: 400px;
  margin: 0 auto;
`

export const MainTitle = styled(CustomText)`
  padding: .5em .5em .5em .2em;
  background-color: ${(props) => props.styles.background};
  margin-bottom: .5em;
`

export const RestaurantInput = styled(CustomInput)`
  width: 85%;
`

export const RestaurantInputWrapper = styled.div`
  display: flex;
  max-width: 400px;
`

export const ToggleThemeButton = styled.button`
  display: border-box;
  background-color: ${(props) => props.theme.background};
  border: none;
  width: 50%;
  max-width: 200px;
  padding: 1em;
  &:active {
    opacity: 0.5;
    border: 2px solid ${(props) => props.theme.font};
  }
  &:hover {
    opacity: 0.5;
  }
`

export const FlagsWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: right;
`

export const ToolbarWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const FlagIconWrapper = styled.div`
  margin: auto 0 auto 1em
`

export const NoResultsWrapper = styled(CustomText)`
  padding: .8em .8em .8em .4em;
  background-color: ${(props) => props.styles.background};
`

export const SearchIconWrapper = styled.div`
  background-color: ${(props) => props.theme.background};
  padding: .6em;
  margin: auto 0 auto auto;
  &:hover {
    background-color: ${(props) => props.theme.background};
    opacity: 0.7;
  }
`