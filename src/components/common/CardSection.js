
import React from 'react';
import { View,Text } from 'react-native';

const CardSection = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
      <Text>></Text>
    </View>
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ddd',
    position: 'relative',
    marginTop: 10,
    height: 'auto',
    marginRight: 20,
    marginLeft: 20
  }
};

export { CardSection };