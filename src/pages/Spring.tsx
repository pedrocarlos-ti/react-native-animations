import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated
} from 'react-native';
import { navigationConfig } from './components/navigation';

export default class Spring extends Component {
  static navigationOptions = navigationConfig('Spring Animation Example');

  state = {
    animation: new Animated.Value(1)
  };

  startAnimation = () => {
    Animated.spring(this.state.animation, {
      toValue: 2,
      friction: 2,
      tension: 160
    }).start(() =>
      Animated.timing(this.state.animation, {
        toValue: 1,
        duration: 100
      }).start()
    );
  };

  render() {
    // Add custom style to animate component
    const animatedStyle = {
      transform: [
        {
          scale: this.state.animation
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
