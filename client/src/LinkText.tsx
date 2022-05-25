import React from 'react';
import { useTranslation } from 'react-i18next';
import { useMatch } from 'react-router-dom'
import { HeaderLink, HeaderText } from './LinkText.styles';
import { config } from './config/config';

const LinkText = () => {
  const isHomeRoute = !!useMatch(config.paths.home);
  const { t } = useTranslation();

  return (
    <div>
      <HeaderLink active={isHomeRoute}>
        <HeaderText>
          {t('first.test.phrase')}
        </HeaderText>   
      </HeaderLink>
      <HeaderLink active={isHomeRoute}>
        <HeaderText>
          {t('second.test.phrase')}
        </HeaderText>   
      </HeaderLink>
      <HeaderLink active={isHomeRoute}>
        <HeaderText>
          {t('third.test.phrase')}
        </HeaderText>   
      </HeaderLink>  
    </div>

  )
}

export default LinkText