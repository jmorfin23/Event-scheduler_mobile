import React from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';

export default class GetEventsForm extends React.Component {
  constructor() {
    super();


    this.state = {
      day: '',
      month: '',
      year: ''
    }
  }

  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.labelText}>Day</Text>
        <TextInput
        style={styles.numInput}
        value={this.state.day}
        onChangeText={(text) => this.setState({ day: text })}
        />

        <Text style={styles.labelText}>Month</Text>
        <TextInput
        style={styles.numInput}
        value={this.state.month}
        onChangeText={(text) => this.setState({ month: text })}
        />

        <Text style={styles.labelText}>Year</Text>
        <TextInput
        style={styles.numInput}
        value={this.state.year}
        onChangeText={(text) => this.setState({ year: text })}
        />

        <View style={{ paddingTop: 30 }}>
          <Button
            title='Get Events'
            onPress={() => this.props.getEvents(this.state.day, this.state.month, this.state.year )}
          />
          </View>
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
  numInput: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    backgroundColor: 'lightgrey',
    borderRadius: 10,
    padding: 5,
  },
  labelText: {
    paddingTop: 30,
    paddingBottom: 10,
    fontWeight: 'bold',
  }

});
