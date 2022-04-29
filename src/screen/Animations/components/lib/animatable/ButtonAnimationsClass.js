import AnimationCell from '@element/AnimationCell';
import React, { Component } from 'react';
import {
  SectionList,
  StyleSheet
} from 'react-native';
import { createAnimatableComponent, Text, View } from 'react-native-animatable';
import GROUPED_ANIMATION_TYPES from '@const/grouped-animation-types';
const AnimatableSectionList = createAnimatableComponent(SectionList);

const COLORS = [
  '#65b237', // green
  '#346ca5', // blue
  '#a0a0a0', // light grey
  '#ffc508', // yellow
  '#217983', // cobolt
  '#435056', // grey
  '#b23751', // red
  '#333333', // dark
  '#ff6821', // orange
  '#e3a09e', // pink
  '#1abc9c', // turquoise
  '#302614', // brown
];

const NATIVE_INCOMPATIBLE_ANIMATIONS = [
  'jello',
  'lightSpeedIn',
  'lightSpeedOut',
];


export class ButtonAnimationsClass extends Component {
  state = {
    duration: 1000,
    toggledOn: false,
  };

  handleRowPressed = (componentRef, animationType) => {
    componentRef.setNativeProps({
      style: {
        zIndex: 1,
      },
    });
    componentRef.animate(animationType, this.state.duration).then(() => {
      componentRef.setNativeProps({
        style: {
          zIndex: 0,
        },
      });
    });
  };

  render() {
    return (
      <View animation="fadeIn" style={styles.container} useNativeDriver>
        <AnimatableSectionList
          animation="bounceInUp"
          contentInsetAdjustmentBehavior="automatic"
          duration={1100}
          delay={1400}
          keyExtractor={item => item}
          sections={GROUPED_ANIMATION_TYPES}
          removeClippedSubviews={false}
          renderSectionHeader={({ section }) => (
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionHeaderText}>{section.title}</Text>
            </View>
          )}
          renderItem={({ item, index }) => (
            <AnimationCell
              animationType={item}
              color={COLORS[index % COLORS.length]}
              onPress={this.handleRowPressed}
              useNativeDriver={
                NATIVE_INCOMPATIBLE_ANIMATIONS.indexOf(item) === -1
              }
            />
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    marginBottom: 20
  },
  title: {
    fontSize: 28,
    fontWeight: '300',
    textAlign: 'center',
    margin: 20,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 20,
    backgroundColor: 'transparent',
  },
  slider: {
    height: 30,
    margin: 10,
  },
  toggle: {
    width: 120,
    backgroundColor: '#333',
    borderRadius: 3,
    padding: 5,
    fontSize: 14,
    alignSelf: 'center',
    textAlign: 'center',
    margin: 10,
    color: 'rgba(255, 255, 255, 1)',
  },
  toggledOn: {
    color: 'rgba(255, 33, 33, 1)',
    fontSize: 16,
    transform: [
      {
        rotate: '8deg',
      },
      {
        translateY: -20,
      },
    ],
  },
  sectionHeader: {
    backgroundColor: '#F5FCFF',
    padding: 15,
  },
  sectionHeaderText: {
    textAlign: 'center',
    fontSize: 18,
  },
});
