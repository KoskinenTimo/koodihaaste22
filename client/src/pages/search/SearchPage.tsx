import React, { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  MainPageWrapper,
  MainTitle, NoResultsWrapper, RestaurantInput, RestaurantInputWrapper, SearchIconWrapper,
} from './SearchPage.styles';
import { getRestaurants } from '../../services/restaurantsService';
import { ThemeContext } from '../../theme/ThemeContext';
import { Alert } from '@mui/material';
import { SearchIcon } from '../../icons/common';

const SearchPage = () => {
  const [ inputValue, setInputValue ] = useState<string>('');
  const { t } = useTranslation();
  const { styles } = useContext(ThemeContext)
  const [ error, setError ] = useState<string>('')
  const [ restaurants, setRestaurants ] = useState<any[]>([])
  const [ isLoading, setIsLoading ] = useState<boolean>(true)
  const isInputValue = !!(inputValue)
  const isRestaurants = !!(restaurants.length)

  useEffect(() => {
    if (!inputValue.length) return
    setIsLoading(true)
    handleClickAndChange(inputValue)
  }, [inputValue])  

  const handleClickAndChange = (inputValue:string) => {
    getRestaurants(inputValue)
      .then(res => {
        const fetchedRestaurants: Array<any> = res.data.restaurants;
        console.log(fetchedRestaurants);
        
        setRestaurants(fetchedRestaurants)
        setIsLoading(false)
      })
      .catch(err => {
        setError(err.message);
        setIsLoading(false)
        setTimeout(() => {
          setError('')
        },4000)
      })
  }

  return (
    <MainPageWrapper>
      {error && <Alert severity='error' style={{ position:'absolute', zIndex: 20, width:'60%', maxWidth:"365px" }}>{error}</Alert>}
      <MainTitle element="h1" color={styles.font} styles={styles} marginBottom=".5em">
        {t('main.title')}
      </MainTitle>
      <RestaurantInputWrapper>
        <RestaurantInput setInputValue={setInputValue}>
          {t('main.input.placeholder')}
        </RestaurantInput>
        <SearchIconWrapper theme={styles} onClick={() => handleClickAndChange(inputValue)}>
          <SearchIcon color={styles.font} />
        </SearchIconWrapper>
      </RestaurantInputWrapper>

      {(!isLoading && isInputValue && !isRestaurants) && 
        <NoResultsWrapper element="h3" color={styles.font} styles={styles} style={{ marginTop: '1em' }}>
          {t('rate.noresults')}
        </NoResultsWrapper>}
      {}
    </MainPageWrapper>

  )
}

export default SearchPage;