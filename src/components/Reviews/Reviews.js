import React from 'react';
import { createUseStyles } from 'react-jss';
import styles from './Reviews.styles';

const useStyles = createUseStyles(styles);

const Reviews = ({ reviews }) => {
  console.log('reviews=', reviews);
  console.log('reviewsPercentage=', `${Math.round(((reviews / 5) * 100) / 10) * 10}%`);
  const classes = useStyles({
    starsInnerWidth:  `${Math.round(((reviews / 5) * 100) / 10) * 10}%`//Math.round((reviews / 5) * 100)
  });
  return (
    <div className={classes.reviewStars}>
      <div className={classes.starsOuter}>
        <div className={classes.starsInner}>
        </div>
      </div>
    </div>
  );
};

export default Reviews;