import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, KeyboardAvoidingView } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import GetEventsForm from '../components/GetEventsForm';



export default class GetEvent extends React.Component {

  getEvents = (day, month, year) => {
    console.log(day, month, year);

    let events = [
      {
        'day': 8,
        'event_id': 1,
        'month': 8,
        'notes': 'this is a test',
        'title': 'Test',
        'year': 2019      }
    ]

      let URL = 'https://evening-mesa-16164.herokuapp.com/api/retrieve';

      fetch(URL, {
        'method': 'GET',
        'headers': {
          'Content-Type': 'application/json',
          'year': year,
          'month': month,
          'day': day
        }
      })

      .then(response => response.json())
      .then( data => {
        console.log(data.success.events);
        this.props.navigation.navigate('EventsList', { 'events': data.success.events });
      }).catch( error => {
        console.log('API call error');
        alert(error.message);
      })
  }
  
  render() {
  return (
      <View style={styles.container}>
        <KeyboardAvoidingView
        style={styles.container}
        behavior='position'
        enabled
        >
          <ScrollView>
            <Text style={styles.large_info}>
              Fill out the fields below to retrieve events for a given time frame...
            </Text>

            <Text style={styles.small_info}>*** Year is requried ***</Text>

            <GetEventsForm getEvents={this.getEvents}/>


          </ScrollView>

        </KeyboardAvoidingView>

      </View>
    );
  }
}

GetEvent.navigationOptions = {
  title: 'Get Events'
};

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
  },
  large_info: {
    fontSize: 20,
    paddingLeft: '10%',
    paddingRight: '10%',
    textAlign: 'center',
  },
  small_info: {
    fontSize: 12,
    textAlign: 'center',
    fontStyle: 'italic',
  }
});
