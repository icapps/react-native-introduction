import React, { Component } from 'react';
import { View, TouchableOpacity, Image, Text, ScrollView } from 'react-native';
import { NavigationActions } from 'react-navigation'
import * as Animatable from 'react-native-animatable';
import styles from './BeerProfile.style';

class BeerProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      beer: props.navigation.state.params.beer,
    }
  }
  
  changeRating = (rating) => {
    fetch(`https://icapps-beers.herokuapp.com/beers/${this.state.beer.id}`, {
      method: 'PUT', 
      headers: {
        'Authorization': 'Token token=kVJzYfn9gRaGDFNrtMDuAexP', 
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        rating
      })
    }).then(response => {
        if (response.ok) {
          this.setState({
            beer: {
              ...this.state.beer,
              rating
            }
          });
        }
      });
  }

  gotoError = () => {
    const { dispatch } = this.props.navigation;
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Error'})
      ]
    })

    dispatch(resetAction);
  }

  renderStars = (stars = 2) => {
    return [...Array(5)].map((x, i) => <Star key={i} rating={i} onPress={this.changeRating} empty={i >= stars} lastFilled={(i + 1) == stars}/>);
  }

  render() {
    const beer = this.state.beer;
    return (
      <ScrollView style={styles.container}>
        <Image style={styles.image} source={{uri: beer.image_url}} />
        <View style={styles.info}>
          <Text style={styles.beerName}>{beer.name}</Text>
          <View style={styles.stars}>{this.renderStars(beer.rating)}</View>
          <View style={styles.action}>
            <TouchableOpacity onPress={this.gotoError}>
              <Text style={styles.actionText}>Trigger an error -> Goto error page.</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.brewery}>
            <Text style={styles.breweryName}>{beer.brewery.name}</Text>
            <Text style={styles.breweryAddress}>{beer.brewery.address}</Text>
            <Text style={styles.breweryAddress}>{beer.brewery.city}</Text>
            <Text style={styles.breweryAddress}>{beer.brewery.country}</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const Star = ({onPress, rating=0, empty=false, lastFilled=false}) => {
  return (
    <TouchableOpacity onPress={() => onPress(rating + 1)}>
      {empty
        ? <Image source={require('../../images/starEmpty.png')} style={styles.star}/>
        : lastFilled 
          ? <Animatable.Image delay={1500} animation='tada' easing='ease-out' iterationCount={3} source={require('../../images/star.png')} style={styles.star}/>
          : <Image source={require('../../images/star.png')} style={styles.star}/>
      }
    </TouchableOpacity>
  );
};

BeerProfile.navigationOptions = (props) => ({
  title: props.navigation.state.params.beer.name,
});

export default BeerProfile;