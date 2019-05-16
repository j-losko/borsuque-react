import React, {Component} from 'react';
import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Navigation} from 'react-native-navigation';

type Props = {};
export default class Index extends Component<Props> {
  constructor() {
    super();
  }

  goToDetails = (title) => {
    Navigation.showModal({
      stack: {
        children: [{
          component: {
            name: 'Details',
            options: {
              topBar: {
                title: {
                  text: title
                }
              }
            }
          }
        }]
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Index.js</Text>
        <TouchableOpacity style={styles.button} onPress={() => this.goToDetails('Detail title')}>
          <Text>
            Details
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
