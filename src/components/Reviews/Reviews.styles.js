export default (() => ({
  reviewStars: {
    fontFamily: 'FontAwesome',
  },
  starsOuter: {
    display: 'inline-block',
    position: 'relative',
    '&:before': {
      content: '"\\f005 \\f005 \\f005 \\f005 \\f005"',
      color: '#e3e3e3',
      marginRight: 5,
    },
  },
  starsInner: {
    position: 'absolute',
    top: 0,
    left: 0,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    width: ({ starsInnerWidth }) => starsInnerWidth,
    '&:before': {
      content: '"\\f005 \\f005 \\f005 \\f005 \\f005"',
      color: 'black',
      marginRight: 5,
    },
  }, 
}));

