import React, { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BasicVotesCard } from '../../components/BasicVotesCard';
import { CustomError } from '../../components/CustomAlert';
import { LoadingIcon } from '../../icons/common';
import { getResults } from '../../services/restaurantsService';
import { LoadingIconWrapper, MainTitle, NoResultsWrapper } from '../../styles/common';
import { ThemeContext } from '../../theme/ThemeContext';
import { BasicVotesCardWrap, VotesTodayPageWrapper } from './VotesTodayPage.styles';

export type Restaurant = {
  name: string,
  votes: number,
  id: string,
  openingHours?: string
}

const VotesTodayPage = () => {
  const [ error, setError ] = useState<string>('')
  const { styles } = useContext(ThemeContext)
  const { t } = useTranslation()
  const [ votes, setVotes ] = useState<Restaurant[]>([])
  const [ isLoading, setIsLoading ] = useState<boolean>(true)
  const isVotes = !!(votes.length)
  
  useEffect(() => {
    fetchVotes()
    setIsLoading(false)
    let timer = setInterval(() => {
      fetchVotes()
    },2000)
    return () => {
      clearInterval(timer)
      const emptyArray:Restaurant[] = []
      setVotes(emptyArray)
    }
  }, [])
  
  const fetchVotes = () => {
    getResults()
      .then(res => {
        res.data.results && setVotes(res.data.results)
      })
      .catch(err => {
        setError(err.message)
      })
  }
  const renderVotesList = () => {
    return votes
      .sort((a,b) => b.votes - a.votes)
      .map(restaurant => (
          <BasicVotesCardWrap
            key={restaurant.id}
            {...restaurant}
          />
      ))
  }

  return (
    <VotesTodayPageWrapper>
      {error && <CustomError error={error} />}
      <MainTitle
        element="h1"
        color={styles.font}
        styles={styles}
        marginBottom=".5em"
      >
        {t('todays.title')}
      </MainTitle>
      {isLoading &&
        <LoadingIconWrapper>
          <LoadingIcon color={styles.font} />
        </LoadingIconWrapper>}
      {(!isLoading && !isVotes) && 
        <NoResultsWrapper
          element="h3"
          color={styles.font}
          styles={styles}
          style={{ marginTop: '1em' }}
        >
          {t('rate.noresults')}
        </NoResultsWrapper>}
      {(!isLoading && isVotes) &&
        renderVotesList()}
    </VotesTodayPageWrapper>
  )
}

export default VotesTodayPage