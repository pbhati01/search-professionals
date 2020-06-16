import React from 'react';
import { createUseStyles } from 'react-jss';
import styles from './Footer.styles';

const useStyles = createUseStyles(styles);

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <ul>
        <li>Copyrights</li>
        <li>Terms of use</li>
        <li>Privacy policy</li>
      </ul>
    </footer>
  );
};

export default Footer;