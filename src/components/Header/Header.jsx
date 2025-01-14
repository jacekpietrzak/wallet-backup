import React from 'react';
import Media from 'react-media';

import { selectUser } from 'redux/auth/selectors';

import { breakpoints } from 'styles/breakpoints';
import Logo from 'components/Logo/Logo';
import styles from './Header.module.scss';
import Divider from '@mui/material/Divider';
import ListItemButton from '@mui/material/ListItemButton';
import LogoutIcon from '@mui/icons-material/Logout';
import ModalLogout from 'components/ModalLogout/ModalLogout';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsModalLogoutOpen } from 'redux/global/selectors';
import { changeIsModalLogoutOpen } from 'redux/global/slice';

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <>
      <Media queries={breakpoints}>
        {matches => (
          <div className={styles.Header__container}>
            <div className={styles.Header}>
              <Logo />

              {matches.mobile && (
                <div className={styles.Header__logOut}>
                  <ListItemButton
                    className={styles.Header__logOutButton}
                    onClick={() => dispatch(changeIsModalLogoutOpen())}
                    sx={{ p: 0, m: 0 }}
                  >
                    <span className={styles.Header__logOutUserName}>
                      {`${user.username}`}
                    </span>
                    <LogoutIcon
                      sx={{
                        color: '#bdbdbd',
                      }}
                    />
                  </ListItemButton>
                </div>
              )}
              {(matches.desktop || matches.tablet) && (
                <div className={styles.Header__logOut}>
                  <span className={styles.Header__logOutUserName}>
                    {' '}
                    {`${user.username}`}
                  </span>
                  <Divider
                    orientation="vertical"
                    flexItem
                    sx={{ color: '#bdbdbd' }}
                  />

                  <ListItemButton
                    sx={{ p: 0, pl: '12px' }}
                    className={styles.Header__logOutButton}
                    onClick={() => dispatch(changeIsModalLogoutOpen())}
                  >
                    <LogoutIcon
                      sx={{
                        color: '#bdbdbd',
                      }}
                    />
                    <span className={styles.Header__logOutButtonText}>
                      Exit
                    </span>
                  </ListItemButton>
                </div>
              )}
            </div>
          </div>
        )}
      </Media>

      <ModalLogout
        isModalOpen={useSelector(selectIsModalLogoutOpen)}
        handleModalClose={() => dispatch(changeIsModalLogoutOpen())}
      />
    </>
  );
};

export default Header;
