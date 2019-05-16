import { Navigation } from "react-native-navigation";
import {registerScreens} from './src/screens';

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        id: 'App',
          children: [
          {
            component: {
              name: 'Initial',
              options: {
                topBar: {
                  title: {
                    text: 'React Native Borsuque Squad App'
                  },
                }
              },
            }
          }
        ],
      }
    }
  });
});