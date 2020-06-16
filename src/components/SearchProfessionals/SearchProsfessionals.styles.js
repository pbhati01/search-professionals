export default ({
  container: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  searchBox: {
    display: 'flex',
    borderBottom: 'solid 1px #d3d3d3',
    '& div': {
      display: 'flex',
      flexDirection: 'column',
      padding: 10,
      height: 80,
      '& select': {
        height: 33,
        padding: '2px 5px 2px 5px',
      },
      '& input': {
        height: 25,
        padding: '2px 5px 2px 5px',
      },
      '& label': {
        marginBottom: 10, 
        fontSize: 14,
      },
      '& button': {
        padding: '4px 25px',
        marginTop: 28,
      },
      '& span': {
        marginTop: 5,
        fontSize: 10,
        color: 'red',
      },
    }
  },
  required: {
    border: 'solid 1px red',
  },
  professionalsList: {
    flex: 1,
    display: 'flex',
    flexFlow: 'column',
    padding: '20px 10px',
    '& table': {
      flex: 1,
      border: 'solid 1px #e3e3e3',
      borderCollapse: 'collapse', 
      '& td': {
        textAlign: 'left',
        padding: 8,
      },
      '& td:nth-child(2)': {
        overflowWrap: 'break-word',
        wordWrap: 'break-word',
      },   
      '& th': {
        textAlign: 'left',
        padding: 10,
        backgroundColor: '#55555570',
        fontSize: 12,
        borderRight: 'solid 1px #fafafa',
      },
      '& th:nth-child(4)': {
        borderRight: 'none',
      },
      '& tr:nth-child(odd)': {
        backgroundColor: '#fff',
      },
      '& tr:nth-child(even)': {
        backgroundColor: '#e3e3e3',
      },      
    },
  },
  actionButton: {
    display: 'flex',
    justifyContent: 'center',
    padding: '40px 20px',
    alignItems: 'center',
    color: '#001C7B',
    '& button': {
      width: 30,
      height: 30,
      color: '#5976d6',
      outline: 'none',
      backgroundColor: '#fff',
      border: 'solid 1px #e3e3e3',
      borderRight: 'none',
    },
    '& button:first-child': {
      borderRight: 'solid 1px #e3e3e3',
    },
    '& button:last-child': {
      borderLeft: 'solid 1px #e3e3e3',
      borderRight: 'solid 1px #e3e3e3',
    },
    '& button[disabled]': {
      color: '#e3e3e3',
    },
    '& button[data-selected ~= "true"]': {
      borderColor: '#5976d6',
      fontWeight: 'bold',
      color: '#fff',
      backgroundColor: '#5976d6',
      borderRight: 'solid 1px #5976d6',
    },
    '& button:hover:not([disabled]):not([data-selected ~= "true"])': {
      cursor: 'pointer',
      fontWeight: 'bold',
      color: '#5976d6',
      border: 'solid 1px #5976d6',
    },
    '& button:hover + & button': {
      borderLeft: 'none',
    },
    '& span': {
      marginRight: 10,
      fontSize: 14,
      fontFamily: 'Roboto-Medium',
    }
  },  
});
