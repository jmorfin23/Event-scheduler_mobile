import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';


export default class SaveEvent extends React.Component {
  //render tab bar icon for bottom nav
  static navigationOptions = {
    tabBarIcon: TabBarIcon('inbox')
  };

  render() {
  return (
      <View style={styles.container}>
        <Text style={styles.text}>Save Event Screen</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 36,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black'
  }
});
