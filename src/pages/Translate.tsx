import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated
} from 'react-native';
import { navigationConfig } from './components/navigation';

export default class Translate extends Component {
  static navigationOptions = navigationConfig('Translate Example');

  state = {
    animation: new Animated.Value(0)
  };

  startAnimation = () => {
    const { animation } = this.state;

    Animated.timing(animation, {
      toValue: 300,
      duration: 1500
    }).start(() => {
      Animated.timing(animation, {
        toValue: 0,
        duration: 1500
      }).start();
    });
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
