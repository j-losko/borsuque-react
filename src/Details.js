import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Navigation} from 'react-native-navigation';

type Props = {};
export default class Details extends Component<Props> {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Details.js</Text>
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
  }
});
