import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated
} from 'react-native';
import { navigationConfig } from './components/navigation';

export default class Parallel extends Component {
  static navigationOptions = navigationConfig('Parallel Animation Example');

  state = {
    colorAnimation: new Animated.Value(0),
    scaleAnimation: new Animated.Value(1)
  };

  startAnimation = () => {
    Animated.parallel([
      Animated.timing(this.state.colorAnimation, {
        toValue: 1,
        duration: 1500
      }),
      Animated.timing(this.state.scaleAnimation, {
        toValue: 2,
        duration: 1500
      })
    ]).start(() => alert('Animation is over'));
  };

  render() {
    // Add custom style to animate component
    const backgroundInterpolate = this.state.colorAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: ['rgb(255,99,71)', 'rgb(99,71,255)']
    });

    const animatedStyle = {
      backgroundColor: backgroundInterpolate,
      transform: [
        {
          scale: this.state.scaleAnimation
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
