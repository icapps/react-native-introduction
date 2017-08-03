import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Animation from 'lottie-react-native';
import styles from './Error.style';
import { NavigationActions } from 'react-navigation'

class Error extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: false,
    }
  }

  componentDidMount() {
    this.animation.play();
  }

  gotoHome = () => {
    const { dispatch } = this.props.navigation;
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Home'})
      ]
    })

    dispatch(resetAction);
  }


  render() {
    return (
      <View style={styles.container}>
        <View>
          <Animation
            ref={animation => { this.animation = animation; }}
            style={{
              width: 300,
              height: 300,
            }}
            loop={true}
            source={require('./failed.json')}
          />
        </View>
         <Text style={styles.errorMsg}>Couldn't fetch beers. We suggest you go drink one yourself.</Text>
         <TouchableOpacity onPress={this.gotoHome}><Text style={styles.button}>...or try again</Text></TouchableOpacity>
      </View>
    );
  }
}

Error.navigationOptions = (props) => ({
  header: null,
});

export default Error;