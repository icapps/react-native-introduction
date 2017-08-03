import { Platform, StatusBar} from 'react-native';
import { StackNavigator } from 'react-navigation';
import BeersOverview from '../screens/beers/Beers.component';
import BeerProfile from '../screens/beerProfile/BeerProfile.component';
import Error from '../components/error/Error';

const MainNavigator = StackNavigator({
  Home: {
    screen: BeersOverview,
    initialRouteParams: {
      filter: false,
    }
  },
  Profile: {
    path: 'beer/:name',
    screen: BeerProfile,
  },
  Error: {
    screen: Error,
  }
}, {
  navigationOptions: {
    headerStyle: {
      height: Platform.OS === "ios" ? 64 : (56 + StatusBar.currentHeight),
      paddingTop: Platform.OS === "ios" ? 20 : StatusBar.currentHeight,
    }
  }
});

export default MainNavigator;
