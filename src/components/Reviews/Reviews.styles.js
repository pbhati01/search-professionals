export default (() => ({
  reviewStars: {
    background: 'url("images/stars.png") no-repeat',
    width: ({ offset }) => (80 * offset / 100),
    height: 16,
  }, 
}));

