import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import WriteStoryScreen from './screens/WriteStoryScreen'
import ReadStoryScreen from './screens/ReadStoryScreen'
import { render } from 'react-dom';

export default class App extends React.Component {
  render(){
    return (
        <AppContainer />
    );
  }
}
const TabNavigator = createBottomTabNavigator({
  WriteStory: {screen: WriteStoryScreen},
  ReadStory: {screen: ReadStoryScreen},
},
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon:()=>{
      const routeName = navigation.state.routeName;
      console.log(routeName)
      if(routeName === "WriteStory"){
        return(
          <Image
          source={require("./assets/write.png")}
          style={{width:30, height:30}}
        />
        )

      }
      else if(routeName === "ReadStory"){
        return(
          <Image
          source={require("./assets/read.png")}
          style={{width:30, height:30}}/>
        )
      }
    }
  })
}
);

const AppContainer =  createAppContainer(TabNavigator);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
