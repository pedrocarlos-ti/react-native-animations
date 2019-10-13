import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import Constants from 'expo-constants';

const routes = ['Opacity', 'Translate', 'Scale'];

export default class Home extends Component<{ navigation: any }> {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>React Animations by Example</Text>
        <ScrollView contentContainerStyle={styles.scrolllview}>
          {routes.map(route => (
            <TouchableOpacity
              key={route}
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
    flex: 1,
    justifyContent: 'center'
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
    margin: 10,
    height: 40,
    backgroundColor: '#f1f1f1',
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
