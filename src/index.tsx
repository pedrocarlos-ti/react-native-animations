import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import Constants from 'expo-constants';
import ReactAnimated from './components/React';

const { width } = Dimensions.get('screen');

const routes = [
  'Opacity',
  'Translate',
  'Scale',
  'WidthHeight',
  'WidthHeightPercentage',
  'Absolute',
  'Color',
  'Rotate',
  'Easing',
  'Spring',
  'Event',
  'Decay',
  'Add',
  'Divide',
  'Multiply',
  'Modulo'
];

export default class Home extends Component<{ navigation: any }> {
  static navigationOptions = {
    header: null
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>React Animations by Example</Text>
        <ReactAnimated />
        <ScrollView contentContainerStyle={styles.scrolllview}>
          {routes.map(route => (
            <TouchableOpacity
              key={route}
              activeOpacity={0.7}
              style={styles.touch}
              onPress={() => navigation.navigate(route)}
            >
              <Text style={styles.text}>{route}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#5959a0',
    marginTop: Constants.statusBarHeight
  },
  scrolllview: {
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
  title: {
    fontSize: 22,
    marginTop: 10,
    textAlign: 'center',
    color: '#e9e9f9',
    fontWeight: 'bold'
  },
  text: {
    fontSize: 20,
    color: '#5959a0'
  },
  touch: {
    width: width / 2 - 20,
    margin: 10,
    height: 100,
    backgroundColor: '#f1f1f1',
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
