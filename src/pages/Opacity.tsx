import React, { Component } from 'react';

import {
  View,
  Animated,
  StyleSheet,
  TouchableWithoutFeedback
} from 'react-native';

export default class Opacity extends Component {
  static navigationOptions = {
    title: 'Opacity Example'
  };

  state = {
    animation: new Animated.Value(1)
  };

  // Function that trigger animation with 1500ms duration and change opacity
  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 0,
      duration: 350
    }).start(() => {
      Animated.timing(this.state.animation, {
        toValue: 1,
        duration: 350
      }).start();
    });
  };

  render() {
    const animatedStyle = {
      opacity: this.state.animation
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
