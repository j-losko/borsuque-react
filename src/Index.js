import React, {Component} from 'react';
import {ActivityIndicator, FlatList, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Navigation} from 'react-native-navigation';

type Props = {};
export default class Index extends Component<Props> {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      data: [],
    };
    this._isMounted = false;
    this.searchValue = '';
    this.arrayholder = [];
  }
  
  componentWillMount = async() => {
    this._isMounted = true;

    try {
      let url = 'https://swapi.co/api/people/?format=json&page=1';

      do {
        let response = await fetch(url);
        let json = await response.json();
        this.arrayholder = [...this.arrayholder, ...json.results];
        this._isMounted && this.searchFilterFunction();
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

  searchFilterFunction = () => {
    const newData = this.arrayholder.filter(item => {
      const itemData = `${item.name.toUpperCase()}`;
      const textData = this.searchValue.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });

    this.setState({ data: newData });
  };

  renderHeader = () => {
    return (
      <TextInput
        style={styles.search}
        placeholder='Search...'
        onChangeText={(text) => {
          this.searchValue = text;
          this.searchFilterFunction();
        }}
        autoCorrect={false}
      />
    );
  };

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
          ListHeaderComponent={this.renderHeader}
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
  },
  search: {
    backgroundColor: '#848484',
    color: '#FFFFFF',
    borderRadius: 10
  }
});
