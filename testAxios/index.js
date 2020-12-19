/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Setup from './Setup';
import ZomatoAPI from './ZomatoAPI';
import Begin from './begin';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Begin);
