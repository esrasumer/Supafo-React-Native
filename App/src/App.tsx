import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import Route from './navigation/Route';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './store/store';

import {StatusBar} from 'react-native';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor={'#F5F5FA'} barStyle={'dark-content'} />
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Route />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;
