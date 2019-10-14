import React, { Component } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated
} from 'react-native';
import { navigationConfig } from './components/navigation';

export default class Event extends Component {
  static navigationOptions = navigationConfig('Event Animation Example');

  state = {
    animation: new Animated.Value(0)
  };

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 3000,
      duration: 1500
    }).start();
  };

  render() {
    // Add custom style to animate component
    const backgroundInterpolate = this.state.animation.interpolate({
      inputRange: [0, 3000],
      outputRange: ['rgb(255,99,71)', 'rgb(99,71,255)']
    });

    const animatedStyle = {
      backgroundColor: backgroundInterpolate
    };

    return (
      <View style={styles.container}>
        <ScrollView
          scrollEventThrottle={16}
          onScroll={e => {
            this.state.animation.setValue(e.nativeEvent.contentOffset.y);
          }}
          // onScroll={Animated.event([
          //   {
          //     nativeEvent: {
          //       contentOffset: {
          //         y: this.state.animation
          //       }
          //     }
          //   }
          // ])}
        >
          <TouchableWithoutFeedback onPress={this.startAnimation}>
            <Animated.View style={[styles.box, animatedStyle]} />
          </TouchableWithoutFeedback>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  box: {
    height: 3000
  }
});
