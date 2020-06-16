import React from 'react';
import { createUseStyles } from 'react-jss';
import styles from './Header.styles';

const useStyles = createUseStyles(styles);

const Header = () => {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <h2>Search Professionals</h2>
    </header>
  );
};

export default Header;