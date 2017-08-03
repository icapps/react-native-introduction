import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.error,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorMsg: {
    fontSize: 20,
    paddingHorizontal: 20,
    color: 'white',
    textAlign: 'center',
  },
  button: {
    fontSize: 14,
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: 'white',
    backgroundColor: colors.beer,
    borderRadius: 10,
    elevation: 2,
    marginTop: 20,
    textAlign: 'center',
  },
});

export default styles;