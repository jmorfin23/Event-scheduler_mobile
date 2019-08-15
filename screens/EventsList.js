import React from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';

export default class EventsList extends React.Component {
  constructor() {
    super();

    this.state = {
      events: [],
    }
  }

  componentDidMount() {
    this.setState({ events: this.props.navigation.getParam('events', [])});
  }

  deleteEvent = id => {
    console.log(id);

    let URL = 'https://evening-mesa-16164.herokuapp.com/api/delete';

    fetch(URL, {
      "method": "DELETE",
      "headers": {
      "Content-Type": "application/json",
      "event_id": id
      }
    }).then(response => response.json())
      .then(data => {
        console.log('delete');
        console.log(data);
    if (data.success) {
      let events = this.state.events;
      events = events.filter(event => event.event_id != id);

      this.setState({ events });

      alert('Successfully deleted the event.');

    } else {
      alert('Sorry, but we could not delete the event. You are forced to go hahahahaha bring chips and beer, but not bud light.');
    }
  });
  }

  render() {
  return (
      <View style={styles.container}>
        <FlatList
        data={this.state.events}
        renderItem={( { item }, index ) =>

          <View style={{ paddingTop: 25 }} key={index}>
            <Text>{item.title} - {item.month}/{item.day}/{item.year}</Text>
              <Button
                title='Delete Event'
                onPress={() => this.deleteEvent(item.event_id)}
              />
          </View>
        }
        keyExtractor={(item, index) => index.toString()}
        />
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
});
