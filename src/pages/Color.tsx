import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated
} from 'react-native';
import { navigationConfig } from './components/navigation';

export default class Color extends Component {
  static navigationOptions = navigationConfig('Colors Animation Example');

  state = {
    animation: new Animated.Value(0)
  };

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 1,
      duration: 1500
    }).start(() => {
      Animated.timing(this.state.animation, {
        toValue: 0,
        duration: 1500
      }).start();
    });
  };

  render() {
    // Add custom style to animate component
    const boxInterpolation = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: ['rgb(255,99,71)', 'rgb(99,71,255)']
    });

    const boxAnimatedStyle = {
      backgroundColor: boxInterpolation
    };

    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[styles.box, boxAnimatedStyle]} />
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
    height: 150
  }
});
