import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated
} from 'react-native';
import { navigationConfig } from './components/navigation';

export default class WidthHeight extends Component {
  static navigationOptions = navigationConfig(
    'Width and Height Animations Example'
  );

  state = {
    animation: new Animated.Value(150)
  };

  startAnimation = val => {
    Animated.timing(this.state.animation, {
      toValue: val,
      duration: 1500
    }).start();
  };

  render() {
    // Add custom style to animate component
    const animatedStyle = {
      width: this.state.animation,
      height: this.state.animation
    };

    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={() => this.startAnimation(300)}>
          <Animated.View style={[styles.box, animatedStyle]} />
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={() => this.startAnimation(150)}>
          <Text style={styles.reset}>Reset</Text>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  box: {
    backgroundColor: 'tomato'
  },
  reset: {
    fontSize: 20,
    backgroundColor: 'tomato',
    padding: 10,
    marginTop: 10
  }
});
