import React, {Component} from 'react';
import {ActivityIndicator, FlatList, Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Navigation} from 'react-native-navigation';

type Props = {};
export default class Index extends Component<Props> {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      data: []
    };
    this._isMounted = false;
  }
  
  componentWillMount = async() => {
    this._isMounted = true;
    try {
      let url = 'https://swapi.co/api/people/?format=json&page=1';
      do {
        let response = await fetch(url);
        let json = await response.json();
        this._isMounted && this.setState({data: [...this.state.data, ...json.results]});
        url = json.next;
      } while(url);
      this._isMounted && this.setState({isLoading: false});
    }
    catch(error) {
      alert(error.message);
    }
  }
  
  componentWillUnmount = () => {
    this._isMounted = false;
  }

  goToDetails = (item) => {
    Navigation.showModal({
      stack: {
        children: [{
          component: {
            name: 'Details',
            options: {
              topBar: {
                title: {
                  text: item.name
                }
              }
            },
            passProps: {
              data: item
            }
          }
        }]
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.isLoading && <ActivityIndicator/>}
        <FlatList
          style={styles.flatlist}
          keyExtractor = {(item, index) => index.toString()}
          data={this.state.data}
          renderItem={({item}) =>
            <TouchableOpacity style={styles.button} onPress={() => this.goToDetails(item)}>
              <Text>{item.name}</Text>
            </TouchableOpacity>
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    margin: 5
  },
  button: {
    backgroundColor: '#DDDDDD',
    alignItems: 'center',
    margin: 7,
    padding: 12,
    borderRadius: 10
  }
});
