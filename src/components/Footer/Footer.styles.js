export default ({
  footer: {
    display: 'flex',
    justifyContent: 'center',
    overflow: 'hidden',
    backgroundColor: 'rgb(201, 234, 226)',
    alignItems: 'center',
    color: '#5976d6',
    fontSize: '12px',
    fontWeight: 'bold',
    height: 40,
    '& ul': {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      margin: '0 20px',
      padding: 0,
    },
    '& li': {
      padding: '0px 15px',
      textAlign: 'center',
      borderLeft: '1px solid #ccc',
      listStyle: 'none',
    },
    '& li:first-child': {
      borderLeft: 0,
    },
  },
});
