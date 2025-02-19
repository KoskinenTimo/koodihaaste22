import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { MUIAppBar } from '../components/MUIAppBar';
import { MUIMenu } from '../components/MUIMenu';
import { ThemeContext } from '../theme/ThemeContext';
import { AppBarTitle, ContentWrapper, PageWrapper } from './HomePage.styles';
import { Route,Routes } from 'react-router-dom';
import SearchPage from './search/SearchPage';
import VotesTodayPage from './votestoday/VotesTodayPage';
import NotFoundPage from './notfound/NotFoundPage';
import VotesPreviouslyPage from './votespreviously/VotesPreviouslyPage';
import { AppIcon } from '../icons/common';


const HomePage = () => {
  const { t } = useTranslation();
  const { styles } = useContext(ThemeContext)

  return (
    <PageWrapper>
      <MUIAppBar>
        <MUIMenu/>
          <AppBarTitle variant="h6" component="div" theme={styles}>
            {t('appbar.title')}
          </AppBarTitle>
          <AppIcon color={styles.font}/>
      </MUIAppBar>
      <ContentWrapper>
        <Routes>
          <Route path='/' element={<SearchPage />} />
          <Route path='/todaysvotes' element={<VotesTodayPage />} />
          <Route path='/previousvotes' element={<VotesPreviouslyPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </ContentWrapper>
    </PageWrapper>
  )
}

export default HomePage;