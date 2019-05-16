import React, {Component} from 'react';
import {Platform, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Navigation} from 'react-native-navigation';
import firebase from 'react-native-firebase';
import {YellowBox} from 'react-native';
YellowBox.ignoreWarnings(['Require cycle:']);

type Props = {};
export default class Login extends Component<Props> {
  constructor() {
    super();
    this.state = {
      login: '',
      password: ''
    };
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
  
  login = async () => {
    if(this.state.login === '' || this.state.password == '') {
      this.setState({
        incorrect: true,
        errorMessage: 'Both login and password need to be filled.'
      });
      return;
    }

    try {
      if(this.props.loginType == 'Sign Up') {
        await firebase.auth().createUserWithEmailAndPassword(this.state.login, this.state.password);
      } else {
        await firebase.auth().signInWithEmailAndPassword(this.state.login, this.state.password);
      }
      this.goToIndex();
    } catch (error) {
      this.setState({
        incorrect: true,
        errorMessage: error.message
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          onChangeText={(login) => this.setState({login})}
          value={this.state.login}
          placeholder="Login:"
        />
        <TextInput
          style={styles.textInput}
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
          placeholder="Password:"
          secureTextEntry={true}
        />
        
        {this.state.incorrect && <Text style={styles.errorText}>{this.state.errorMessage}</Text>}
        
        <TouchableOpacity style={styles.button} onPress={() => this.login()}>
          <Text>
            {this.props.loginType}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    padding: 10,
	marginTop: 30
  },
  button: {
    backgroundColor: '#DDDDDD',
    alignItems: 'center',
    margin: 15,
    padding: 15,
	borderRadius: 10
  },
  errorText: {
    backgroundColor: '#f2dede',
    color: '#a94442',
    textAlign: 'center',
    margin: 15,
	padding: 7,
	borderRadius: 10
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 15
  }
});
