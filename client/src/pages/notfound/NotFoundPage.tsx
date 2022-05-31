import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { BasicVotesCard } from '../../components/BasicVotesCard'
import { NotFoundPageWrapper } from './NotFoundPage.styles'


const NotFoundPage = () => {
  const { t } = useTranslation()

  useEffect(() => {
    window.document.title = "Not found"
  }, [])
  
  return (
    <NotFoundPageWrapper>
      <BasicVotesCard
        name={t('notfoundpage.message')}
      />
    </NotFoundPageWrapper>
  )
}

export default NotFoundPage