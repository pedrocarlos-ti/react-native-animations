import React, { Component } from 'react';
import { View, StyleSheet, Animated, Easing } from 'react-native';

export default class ReactAnimate extends Component {
  componentDidMount() {
    this.startAnimation();
  }

  state = {
    animation: new Animated.Value(0)
  };

  startAnimation = () => {
    Animated.loop(
      Animated.timing(this.state.animation, {
        toValue: 1,
        duration: 5000,
        easing: Easing.linear
      })
    ).start();
  };

  render() {
    const rotate = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    });

    // Add custom style to animate component
    const animatedStyle = {
      transform: [
        {
          rotate: rotate
        }
      ]
    };

    return (
      <Animated.Image
        source={{
          uri:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'
        }}
        style={[styles.image, animatedStyle]}
      />
    );
  }
}

const styles = StyleSheet.create({
  image: {
    alignSelf: 'center',
    width: 150,
    height: 150
  }
});
