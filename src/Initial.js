import React, {Component} from 'react';
import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Navigation} from 'react-native-navigation';

type Props = {};
export default class Initial extends Component<Props> {
  constructor() {
    super();
  }

  goTo = (screen, screenTitle) => {
    Navigation.push(this.props.componentId, {
      component: {
        name: screen,
        options: {
          topBar: {
            title: {
              text: screenTitle
            }
          }
        }
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => this.goTo('SignIn', 'Sign In')}>
          <Text>
            Sign In
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => this.goTo('SignUp', 'Sign Up')}>
          <Text>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    backgroundColor: '#DDDDDD',
    alignItems: 'center',
    margin: 30,
    padding: 10
  }
});
