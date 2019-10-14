import React, { Component } from 'react';
import { View, StyleSheet, Animated, PanResponder } from 'react-native';
import { navigationConfig } from './components/navigation';

export default class Decay extends Component {
  static navigationOptions = navigationConfig('Decay PanResponder Example');

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: (e, gestureState) => {
        this.state.animation.extractOffset();
      },
      onPanResponderMove: Animated.event([
        null,
        {
          dx: this.state.animation.x,
          dy: this.state.animation.y
        }
      ]),
      onPanResponderRelease: (e, { vx, vy }) => {
        Animated.decay(this.state.animation, {
          velocity: { x: vx, y: vy },
          deceleration: 0.997
        }).start();
      }
    });
  }

  state = {
    animation: new Animated.ValueXY(0)
  };

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 0,
      duration: 1500
    }).start();
  };

  render() {
    console.log(this._panResponder.panHandlers);
    // Add custom style to animate component
    const animatedStyle = {
      transform: this.state.animation.getTranslateTransform()
    };

    return (
      <View style={styles.container}>
        <Animated.View
          style={[styles.box, animatedStyle]}
          {...this._panResponder.panHandlers}
        />
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
