import {Navigation} from 'react-native-navigation';

export function registerScreens() {
  Navigation.registerComponent('Initial', (sc) => require('./Initial').default);
  Navigation.registerComponent('Login', () => require('./Login').default);
  Navigation.registerComponent('Index', () => require('./Index').default);
  Navigation.registerComponent('Details', () => require('./Details').default);
}