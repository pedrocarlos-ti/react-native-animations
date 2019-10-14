import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated
} from 'react-native';
import { navigationConfig } from './components/navigation';

export default class WidthHeightPercentage extends Component {
  static navigationOptions = navigationConfig(
    'Width/Height % Animation Example'
  );

  state = {
    animation: new Animated.Value(0),
    headerTintColor: '#e9e9e9',
    headerStyle: {
      backgroundColor: '#5959a0'
    },
    headerTitleStyle: {
      color: '#e9e9f9'
    }
  };

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 1,
      duration: 1500
    }).start();
  };

  render() {
    // Add custom style to animate component
    const widthInterpolate = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: ['10%', '75%']
    });

    const heightInterpolate = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: ['10%', '90%']
    });

    const animatedStyle = {
      width: widthInterpolate,
      height: heightInterpolate
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
    backgroundColor: 'tomato'
  }
});
