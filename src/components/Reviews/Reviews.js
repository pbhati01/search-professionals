import React from 'react';
import { createUseStyles } from 'react-jss';
import styles from './Reviews.styles';

const useStyles = createUseStyles(styles);

const Reviews = ({ reviews }) => {
  const classes = useStyles({
    offset: Math.round((reviews / 5) * 100)
  });

  return (
    <div className={classes.reviewStars}></div>
  );
};

export default Reviews;