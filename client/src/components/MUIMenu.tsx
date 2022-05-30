import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { EnglishFlagIcon, FinnishFlagIcon } from '../icons/flags';
import { ThemeContext } from '../theme/ThemeContext';
import { useTranslation } from 'react-i18next';
import { MenuItemWrapper } from './MUIMenu.styles';
import { setLocal } from '../services/localStorageService';
import i18next from 'i18next';
import { languages } from '../lang/lang';
import { useNavigate } from 'react-router-dom';
import { config } from '../config/config';

export const MUIMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const { styles,toggleTheme,theme } = React.useContext(ThemeContext);
  const { t } = useTranslation();
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const changeLanguageToFiHandler = () => {
    setLocal('language', languages.fi);
    i18next.changeLanguage(languages.fi);
  }

  const changeLanguageToEnHandler = () => {
    setLocal('language', languages.en);
    i18next.changeLanguage(languages.en);
  }

  return (
    <div>
      <IconButton
        size="large"
        edge="start"
        color="primary"
        aria-label="menu"
        sx={{ mr: 2 }}
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      > 
        <MenuItem onClick={() => handleClose()}>
          <FinnishFlagIcon handleClick={changeLanguageToFiHandler}/>
          <EnglishFlagIcon handleClick={changeLanguageToEnHandler}/>
        </MenuItem>
        <MenuItem onClick={() => handleClose()}>
          <MenuItemWrapper 
            size='button'
            color={styles.font}
            onClick={toggleTheme}
            theme={styles}
          >
            {t('menu.theme')}: {theme}
          </MenuItemWrapper>
        </MenuItem>
        <MenuItem onClick={() => handleClose()}>
          <MenuItemWrapper 
            size='button'
            color={styles.font}
            onClick={() => navigate(config.paths.search)}
            theme={styles}
          >
            {t('menu.search')}
          </MenuItemWrapper>
        </MenuItem>
        <MenuItem onClick={() => handleClose()}>
          <MenuItemWrapper 
            size='button'
            color={styles.font}
            onClick={() => navigate(config.paths.today)}
            theme={styles}
          >
            {t('menu.today')}
          </MenuItemWrapper>
        </MenuItem>
        <MenuItem onClick={() => handleClose()}>
          <MenuItemWrapper 
            size='button'
            color={styles.font}
            onClick={() => navigate(config.paths.previous)}
            theme={styles}
          >
            {t('menu.previously')}
          </MenuItemWrapper>
        </MenuItem>
      </Menu>
    </div>
  );
}