import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  beer: {
    borderBottomColor: '#eee',
    borderBottomWidth: .5,
    paddingVertical: 20,
    marginHorizontal: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  beerContent: {
    flex: 1,
  },
  beerName: {
    color: '#333',
    fontSize: 18,
    fontWeight: '500',
  },
  breweryName: {
    color: colors.beer,
    fontSize: 14,
    fontStyle: 'italic'
  },
  thumb: {
    width: 50,
    height: 50,
    borderRadius: 25,
    resizeMode: 'contain',
    marginRight: 15,
  },
  filterWrapper: {
    width: 100,
    flexDirection: 'row',
    alignItems: 'center',
  },
  star: {
    width: 25,
    height: 25,
    marginRight: 5,
  },
  switch: {
    height: 30,
  },
  ratingImg: {
    height: 10,
    width: 10,
  },
});

export default styles;