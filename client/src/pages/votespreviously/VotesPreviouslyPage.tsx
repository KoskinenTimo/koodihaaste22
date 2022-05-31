
import { isMoment } from "moment"
import React, { useContext, useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { BasicVotesCard } from "../../components/BasicVotesCard"
import { CustomError } from "../../components/CustomAlert"
import { LoadingIcon } from "../../icons/common"
import { getResultsOnDate } from "../../services/restaurantsService"
import { LoadingIconWrapper, MainTitle, NoResultsWrapper } from "../../styles/common"
import { ThemeContext } from "../../theme/ThemeContext"
import { CustomDatePickerWrapper, VotesPreviouslyPageWrapper } from "./VotesPreviouslyPage.styles"


export type Restaurant = {
  name: string,
  votes: number,
  restaurantid: string,
  openingHours?: string
}

const VotesPreviouslyPage = () => {
  const [ error, setError ] = useState<string>('')
  const { styles } = useContext(ThemeContext)
  const { t } = useTranslation()
  const [ votes, setVotes ] = useState<Restaurant[]>([])
  const [ isLoading, setIsLoading ] = useState<boolean>(false)
  const [ chosenDate, setChosenDate ] = useState<Date | null>(new Date())
  const isVotes = !!(votes.length)
  
  useEffect(() => {
    if (chosenDate) {
      fetchVotes(chosenDate)
    }
    return () => {
      const emptyArray:Restaurant[] = []
      setVotes(emptyArray)
    }
  }, [chosenDate])

  useEffect(() => {
    window.document.title = "Previous votes"
  }, [])

  const fetchVotes = (inputValue:Date) => {    
    const year = inputValue.getFullYear()
    const month = inputValue.getMonth() < 10 
      ? `0${inputValue.getMonth()+1}`
      : inputValue.getMonth()+1
    const day = inputValue.getDate() < 10
      ? `0${inputValue.getDate()}`
      : inputValue.getDate()
    const dateString = `${year}-${month}-${day}`    
    getResultsOnDate(dateString)
      .then(res => {
        res.data.results && setVotes(res.data.results)
        setIsLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setTimeout(() => {
          setError('')
        },4000)
      })
  }
  
  const renderVotesList = () => {    
    return votes
      .sort((a,b) => b.votes - a.votes )
      .map(restaurant => (
          <BasicVotesCard
            key={restaurant.restaurantid}
            {...restaurant}
          />
        )
      )
  }

  const handleChange = (inputValue: Date | null) => {
    if (inputValue && isMoment(inputValue)) {
      setIsLoading(true)
      const dateObject = inputValue.toDate()
      setChosenDate(dateObject)
    }
  }

  return (
    <VotesPreviouslyPageWrapper>
      {error && <CustomError error={error} />}

      <MainTitle
        element="h1"
        color={styles.font}
        styles={styles}
        marginBottom=".5em"
      >
        {t('previous.title')}
      </MainTitle>
      <CustomDatePickerWrapper
        chosenDate={chosenDate}
        handleChange={handleChange}
        titleMessage={t('previous.input.title')}
      />
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
    </VotesPreviouslyPageWrapper>
  )
}

export default VotesPreviouslyPage;