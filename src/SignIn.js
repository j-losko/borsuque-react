import React, {Component} from 'react';
import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Navigation} from 'react-native-navigation';

type Props = {};
export default class SignIn extends Component<Props> {
  constructor() {
    super();
  }

  goToIndex = () => {
    Navigation.setRoot({
      root: {
        component: {
          name: "Index"
        }
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>SignIn.js</Text>
        <TouchableOpacity style={styles.button} onPress={() => this.goToIndex()}>
          <Text>
            Sign In
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
