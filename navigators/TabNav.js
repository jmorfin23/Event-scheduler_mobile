import React from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import EventsList from '../screens/EventsList';
import GetEvent from '../screens/GetEvent';
import SaveEvent from '../screens/SaveEvent';
import TabBarIcon from '../components/TabBarIcon';



//create the stack navigators before we create the tab navigators
const ShowEventStack = createStackNavigator(
  {
    GetEvents: GetEvent,
    EventsList: EventsList,
  }
);

EventsList.navigationOptions = {
  title: 'List of Events'
};



ShowEventStack.navigationOptions = {
  tabBarLabel: 'Get Events',
  tabBarIcon: TabBarIcon('favorite')
}

//create the bottom tab navigators
export default createBottomTabNavigator(
  {
    SaveEvent,
    ShowEventStack
  },
  {
    tabBarOptions: {
      // //Label and icon color of the active tab.
      // activeTintColor: 'red',
      // //background color of the active tab
      // activeBackgroundColor: 'lightgrey',
      // //label an icon color of the inactive tab.
      // inactiveTintColor: 'blue',
      // //background color of the inactive tab.
      // inactiveBackgroundColor: 'black',
      // //style object for the tab TabBar
      style: { borderTopWidth: 2, borderTopColor: 'blue' },
      //style object for the tab label
      labelStyle: { fontWeight: 'bold' },
      //style obejct for the tab
      tabStyle: { paddingtop: 7 },
      //whether to show label for tab or not default is true
      showLabel: false,
      //padding
    }
  }
)
