import React, {Fragment} from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';
import { Header } from './src/components/common';
import LibraryList from  './src/components/LibraryList'

const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <View style={{flex : 1}}>
        <Header headerText="Taha"/>
        <LibraryList/>
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
