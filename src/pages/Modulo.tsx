import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated
} from 'react-native';
import { navigationConfig } from './components/navigation';

export default class Modulo extends Component {
  static navigationOptions = navigationConfig('Modulo Animation Example');

  state = {
    animation: new Animated.Value(0)
  };

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 12,
      duration: 3500
    }).start();
  };

  render() {
    const randomValue = 3;
    // Animation that executes for each module based state
    const newAnimation = Animated.modulo(this.state.animation, randomValue);
    const interpolated = newAnimation.interpolate({
      inputRange: [0, 3],
      outputRange: ['0deg', '270deg']
    });

    const animatedStyle = {
      transform: [
        {
          rotate: interpolated
        }
      ]
    };

    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[styles.box, animatedStyle]}>
            <Animated.Text>ROTATE</Animated.Text>
          </Animated.View>
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
