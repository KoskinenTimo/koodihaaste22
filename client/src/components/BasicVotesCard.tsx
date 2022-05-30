import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { Restaurant } from '../pages/search/SearchPage'
import { ThemeContext } from '../theme/ThemeContext'
import { BasicVotesCardWrapper } from './BasicVotesCard.styles'
import { CustomText } from './CustomText'


export const BasicVotesCard = ({
  name,
  votes,
  id,
  openingHours
}: Restaurant) => {
  const { t } = useTranslation();
  const { styles } = useContext(ThemeContext)

  return (
    <BasicVotesCardWrapper theme={styles}>
      <CustomText size={'h5'} element={"h5"} color={styles.font}>
        {name}
      </CustomText>
      <CustomText size={'button'} color={styles.font}>
        {t('restaurant.card.votes')}: {votes}
      </CustomText>
    </BasicVotesCardWrapper>
  )
}
