import {connect} from 'react-redux';
import AnimationsScreen from './Animations';

const mapStateToProps = GlobalState => {
  const {LanguageReducer} = GlobalState;
  const DataMenuAnimations = [
    {
      id: 1,
      name: 'react-native-animated-core',
      data: [
        // {
        //   id: 1,
        //   name: 'Animated.timing()',
        //   component: <AnimatedTiming />,
        // },
        // {
        //   id: 2,
        //   name: 'Animated.decay()',
        //   component: <AnimationDecay />,
        // },
        // {
        //   id: 3,
        //   name: 'Animated.spring()',
        //   component: <AnimatedSpring />,
        // },
        // {
        //   id: 4,
        //   name: 'Animated.Value()',
        //   component: <AnimatedValue />,
        // },
        // {
        //   id: 5,
        //   name: 'Animated.ValueXY()',
        //   component: <AnimatedValueXY />,
        // },
      ],
    },
    {
      id: 2,
      name: 'react-native-animatable',
      data: [
        {
          id: 1,
          name: '',
        },
        {
          id: 2,
          name: '',
        },
        {
          id: 3,
          name: '',
        },
        {
          id: 4,
          name: '',
        },
      ],
    },
  ];
  return {
    languageCurrent: LanguageReducer.language,
    MenuAnimations: DataMenuAnimations,
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(AnimationsScreen);
