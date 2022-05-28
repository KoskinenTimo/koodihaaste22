import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useMatch } from 'react-router-dom'
import { HeaderLink, HeaderText } from './LinkText.styles';
import { config } from './config/config';

const LinkText = () => {
  const isHomeRoute = !!useMatch(config.paths.search);
  const { t } = useTranslation();

  return (
    <div>
      <HeaderLink >
        <HeaderText $active={isHomeRoute}>
          {t('first.test.phrase')}
        </HeaderText>   
      </HeaderLink>
    </div>

  )
}

export default LinkText