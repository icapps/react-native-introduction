import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    minHeight: 300,
    resizeMode: 'cover'
  },
  info: {
    borderTopColor: colors.beer,
    borderTopWidth: 5,
    backgroundColor: 'white',
    paddingBottom: 30,
  },
  beerName: {
    fontSize: 30,
    textAlign: 'center',
    paddingVertical: 20,
  },
  stars: {
    flexDirection: 'row',
    width: 250,
    alignSelf: 'center', 
    justifyContent: 'space-around',
  },
  star: { 
    width: 32,
    height: 32,
  },
  brewery: {
    backgroundColor: 'white',
    marginTop: 30,
    padding: 20,
    marginHorizontal: 20,
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 3,
    shadowOpacity: 0.24,
    borderRadius: 2,
    elevation: 3,
  },
  breweryName: {
    fontSize: 20,
    paddingBottom: 10,
  },
  breweryAddress: {
    fontSize: 14,
    paddingVertical: 3,
  },
});

export default styles;