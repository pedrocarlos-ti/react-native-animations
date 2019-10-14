import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
  Easing,
  Dimensions
} from 'react-native';

import { navigationConfig } from './components/navigation';

export default class EasingAnimation extends Component {
  static navigationOptions = navigationConfig('Easing Animation Example');

  state = {
    animation: new Animated.Value(0)
  };

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 200,
      duration: 500,
      // easing: Easing.back(5),
      // easing: Easing.bounce
      // easing: Easing.elastic(3)
      easing: Easing.bezier(0.06, 0.5, 0.86, 0.26)
    }).start();
  };

  render() {
    // Add custom style to animate component
    const animatedStyle = {
      transform: [
        {
          translateY: this.state.animation
        }
      ]
    };

    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[styles.box, animatedStyle]} />
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
    width: 150,
    height: 150,
    backgroundColor: 'tomato'
  }
});
