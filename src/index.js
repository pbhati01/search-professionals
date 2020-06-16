import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/storeSetup';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchProfessionals from './components/SearchProfessionals';

ReactDOM.render((
  <Provider store={store}>
    <Header />
    <SearchProfessionals />
    <Footer />
  </Provider>
), document.getElementById('root'));
