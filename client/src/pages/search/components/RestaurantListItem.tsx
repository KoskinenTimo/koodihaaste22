import React, { 
  useContext,
  useEffect,
  useState 
} from 'react';
import { useTranslation } from 'react-i18next';
import { CustomText } from '../../../components/CustomText';
import { ThemeContext } from '../../../theme/ThemeContext';
import { Restaurant } from '../SearchPage';
import {
  EmptyHeartIconWrap,
  FilledHeartIconWrap,
  IconWrapper,
  RestaurantDetailsWrapper,
  RestaurantListItemWrapper
} from './RestaurantListItem.styles';

type RestaurantItem = Restaurant & {
  handleVotingClick:(id:string,isLiked:boolean) => void,
  votedRestaurant:string
}

export const RestaurantListItem = ({
  name,
  votes,
  openingHours,
  id,
  handleVotingClick,
  votedRestaurant
}: RestaurantItem) => {
  const { t } = useTranslation();
  const { styles } = useContext(ThemeContext)
  const [ isLiked, setIsLiked ] = useState<boolean>(false)

  useEffect(() => {
    if (votedRestaurant === id) {
      setIsLiked(true)
    } else {
      setIsLiked(false)
    }
  }, [votedRestaurant,id])

  const handleLikeClick = () => {
    handleVotingClick(id,isLiked)
    setIsLiked(!isLiked)
  }

  return (
    <RestaurantListItemWrapper theme={styles}>
      <RestaurantDetailsWrapper>
        <CustomText size={'h5'} element={"h5"} color={styles.font}>
          {name}
        </CustomText>
        <CustomText size={'button'} color={styles.font}>
          {t('restaurant.card.votes')}: {votes}
        </CustomText>
        <CustomText size={'button'} color={styles.font}>
          {t('restaurant.card.open')}: {openingHours}
        </CustomText>
      </RestaurantDetailsWrapper>
      <IconWrapper onClick={() => handleLikeClick()}>
        {isLiked 
          ? <FilledHeartIconWrap color={styles.font}/>
          : <EmptyHeartIconWrap color={styles.font}/>
        }
      </IconWrapper>
      
    </RestaurantListItemWrapper>
  )
}