import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated
} from 'react-native';
import { navigationConfig } from './components/navigation';

export default class Sequence extends Component {
  static navigationOptions = navigationConfig('Sequence Animation Example');

  state = {
    scaleAnimation: new Animated.Value(1)
  };

  startAnimation = () => {
    Animated.sequence([
      Animated.timing(this.state.scaleAnimation, {
        toValue: 2,
        duration: 1500
      }),
      Animated.timing(this.state.scaleAnimation, {
        toValue: 1,
        duration: 1500
      })
    ]).start();
  };

  render() {
    // Add custom style to animate component
    const animatedStyle = {
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
