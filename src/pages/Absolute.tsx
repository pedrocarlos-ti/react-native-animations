import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated
} from 'react-native';
import { navigationConfig } from './components/navigation';

export default class Absolute extends Component {
  static navigationOptions = navigationConfig('Absolute Animation Example');

  state = {
    animation: new Animated.Value(0)
  };

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 40,
      duration: 1500
    }).start();
  };

  render() {
    // Add custom style to animate component
    const animatedStyle = {
      top: this.state.animation,
      left: this.state.animation,
      right: this.state.animation
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
    height: 150,
    top: 0,
    left: 0,
    right: 0,
    position: 'absolute',
    backgroundColor: 'tomato'
  }
});
