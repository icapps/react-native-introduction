import React, { Component } from 'react';
import { TouchableOpacity, Switch, View, Text, Image, FlatList } from 'react-native';
import styles from './Beers.style';
import Error from '../../components/error/Error';
import { NavigationActions } from 'react-navigation'

class Beers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: []
    }
  }

  componentWillMount() {
    fetch('https://icapps-beers.herokuapp.com/beers', {
      method: 'get',
      headers: {
        'Authorization': 'Token token=kVJzYfn9gRaGDFNrtMDuAexP',
        'Content-Type': 'application/json'
      },
    })
      .then(response => response.json())
      .then(list => {
        if (!list.beers.length) {
          throw 'No beers fetched';
        }
        this.setState({
          beers: list.beers
        });
      })
      .catch(error => {
        this.gotoError();
      });
  }

  gotoBeer = (beer) => {
    const { navigate } = this.props.navigation;
    navigate('Profile', { beer });
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

  renderBeer = ({ item }) => {
    if (this.filter && item.rating < 3) {
      return null;
    }
    return <Beer onPressCallback={this.gotoBeer} item={item} key={item.name} showStars={this.filter} />;
  }

  get filter() {
    const params = this.props.navigation.state.params || {};
    const filter = params.filter || false;
    return filter;
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.beers}
          keyExtractor={item => item.name}
          extraData={this.filter}
          renderItem={this.renderBeer}
        />
      </View>
    );
  }
};

const Beer = ({ item, onPressCallback, showStars }) => {
  return (
    <TouchableOpacity onPress={() => onPressCallback(item)}>
      <View style={styles.beer}>
        <Image style={styles.thumb} source={{ uri: item.thumb_image_url }} />
        <View style={styles.beerContent}>
          <Text style={styles.beerName}>
            {item.name}
            {showStars && [...Array(item.rating)].map((x, i) => <Image key={i} source={require('../../images/star.png')} style={styles.ratingImg} />)}
          </Text>
          <Text style={styles.breweryName}>{item.brewery.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const FilterButton = ({ handleChange, value }) => {
  return (
    <View style={styles.filterWrapper}>
      <Image source={require('../../images/star.png')} style={styles.star} />
      <Switch onValueChange={() => handleChange({ filter: !value })} style={styles.switch} value={value} />
    </View>
  )
}

Beers.navigationOptions = ({ navigation }) => {
  const filter = navigation.state.params && navigation.state.params.filter || false;
  return {
    title: 'Beers',
    headerRight: <FilterButton handleChange={navigation.setParams} value={filter} />,
  }
};

export default Beers;