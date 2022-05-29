import React, { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  LoadingIconWrapper,
  MainPageWrapper,
  MainTitle,
  NoResultsWrapper,
  RestaurantInput,
  RestaurantInputWrapper, 
  SearchIconWrapper,
} from './SearchPage.styles';
import { getRestaurants, getResults, voteRestaurant } from '../../services/restaurantsService';
import { ThemeContext } from '../../theme/ThemeContext';
import { LoadingIcon, SearchIcon } from '../../icons/common';
import { CustomError } from '../../components/CustomAlert';
import { RestaurantListItem } from './components/RestaurantListItem';
import { getLocal, removeLocal, setLocal } from '../../services/localStorageService';


export type Restaurant = {
  name: string,
  votes: number,
  id: string,
  openingHours?: string
}

const SearchPage = () => {
  const [ inputValue, setInputValue ] = useState<string>('');
  const { t } = useTranslation();
  const { styles } = useContext(ThemeContext)
  const [ error, setError ] = useState<string>('')
  const [ restaurants, setRestaurants ] = useState<Restaurant[]>([])
  const [ isLoading, setIsLoading ] = useState<boolean>(false)
  const [ votedRestaurant, setVotedRestaurant ] = useState<string>('')
  const isInputValue = !!(inputValue)
  const isRestaurants = !!(restaurants.length)

  useEffect(() => {
    if (!inputValue.length) return
    setIsLoading(true)
    handleClickAndInputChange(inputValue)
  }, [inputValue])  

  useEffect(() => {
    const votedRestaurantId = getLocal('VOTED_RESTAURANT_ID')
    const votedRestaurantTime = getLocal('VOTED_RESTAURANT_TIME')
    const isVotingDetailsInStorage = !!(votedRestaurantId && votedRestaurantTime)
    let storedDate
    if (isVotingDetailsInStorage) {
      storedDate = new Date(votedRestaurantTime)
    }
    let isVotingDetailsInStorageOld
    if (storedDate) {
      isVotingDetailsInStorageOld = !!(
          storedDate < new Date() &&
          storedDate.getDate() !== new Date().getDate()
        )
    }
    if (isVotingDetailsInStorageOld) {
      removeLocal('VOTED_RESTAURANT_ID')
      removeLocal('VOTED_RESTAURANT_TIME')
    } 
    if (votedRestaurantId && !isVotingDetailsInStorageOld) {
      setVotedRestaurant(votedRestaurantId)
    }
  }, [])

  const handleClickAndInputChange = async (inputValue:string) => {
    try {
      const res = await getRestaurants(inputValue)
      const fetchedRestaurants:Restaurant[] = res.data.restaurants;
      const mappedRestaurants = fetchedRestaurants.map(r => {
        return { 
          id:r.id,
          name:r.name,
          votes:r.votes,
          openingHours:r.openingHours
        }
      })
      setIsLoading(false)
      setRestaurants(mappedRestaurants)
    } catch (err:any) {
      setError(err.message);
      setIsLoading(false)
      setTimeout(() => {
        setError('')
      },4000)
    }
  }

  const handleVotingClick = async (id:string,isLiked:boolean) => {
    removeLocal('VOTED_RESTAURANT_ID')
    removeLocal('VOTED_RESTAURANT_TIME')
    if (!isLiked) {
      setLocal('VOTED_RESTAURANT_ID',id)
      setLocal('VOTED_RESTAURANT_TIME',new Date().toString())
      setVotedRestaurant(id)
    }
    try {
      await voteRestaurant(id)
      const res = await getResults()
      console.log(res.data);
      
    } catch (err:any) {
      setError(err.message);
      setIsLoading(false)
      setTimeout(() => {
        setError('')
      },4000)
    }
  }

  const renderRestaurantsList = () => {
    return restaurants
      .sort((a,b) => b.votes - a.votes )
      .map(restaurant => (
        <RestaurantListItem
          key={restaurant.id}
          handleVotingClick={handleVotingClick}
          votedRestaurant={votedRestaurant}
          {...restaurant}
        />
      ))
  }

  return (
    <MainPageWrapper>
      {error && <CustomError error={error} />}
      <MainTitle
        element="h1"
        color={styles.font}
        styles={styles}
        marginBottom=".5em"
      >
        {t('main.title')}
      </MainTitle>
      <RestaurantInputWrapper>
        <RestaurantInput setInputValue={setInputValue}>
          {t('main.input.placeholder')}
        </RestaurantInput>
        <SearchIconWrapper 
          theme={styles}
          onClick={() => handleClickAndInputChange(inputValue)}
        >
          <SearchIcon color={styles.font} />
        </SearchIconWrapper>
      </RestaurantInputWrapper>

      {isLoading &&
        <LoadingIconWrapper>
          <LoadingIcon color={styles.font} />
        </LoadingIconWrapper>}
      {(!isLoading && isInputValue && !isRestaurants) && 
        <NoResultsWrapper
          element="h3"
          color={styles.font}
          styles={styles}
          style={{ marginTop: '1em' }}
        >
          {t('rate.noresults')}
        </NoResultsWrapper>}
      {(!isLoading && isInputValue && isRestaurants) &&
        renderRestaurantsList()}
    </MainPageWrapper>

  )
}

export default SearchPage;