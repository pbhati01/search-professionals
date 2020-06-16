export default ({
  '@global': {
    body: {
      margin: 0,
      '& #root': {        
        fontFamily: 'Verdana',
        display: 'flex',
        minHeight: '100vh',
        flexDirection: 'column',
      }
    }
  },
  header: {
    position: 'relative',
    height: 60,
    backgroundColor: 'rgb(201, 234, 226)',
    display: 'flex',
    fontSize: 12,
    paddingLeft: 10,
    '& h2': {
      color: '#5976d6',
    },
  },   
});

