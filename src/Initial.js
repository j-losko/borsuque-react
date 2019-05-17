import React, {Component} from 'react';
import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Navigation} from 'react-native-navigation';

type Props = {};
export default class Initial extends Component<Props> {
  constructor() {
    super();
  }

  goTo = (loginType) => {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'Login',
        options: {
          topBar: {
            title: {
              text: loginType
            }
          }
        },
        passProps: {
          loginType: loginType
        }
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => this.goTo('Sign In')}>
          <Text style={styles.buttonText}>
            Sign In
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => this.goTo('Sign Up')}>
          <Text style={styles.buttonText}>
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
    alignItems: 'stretch',
  },
  button: {
    backgroundColor: '#30a3f1',
    alignItems: 'center',
    margin: 30,
    padding: 15,
    borderRadius: 10
  },
  buttonText: {
    color: 'white',
    fontSize: 17
  }
});
