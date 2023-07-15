import React from 'react';
import {AuthProvider} from './context/AuthContext';
import AppNav from './navigation/AppNav';
import {Provider} from 'react-redux';
import {store} from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <AppNav />
    </Provider>
  );
}

export default App;
