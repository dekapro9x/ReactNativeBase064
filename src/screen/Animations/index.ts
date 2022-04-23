import {connect} from 'react-redux';
import AnimationsScreen from './Animations';

const mapStateToProps = GlobalState => {
  const {LanguageReducer} = GlobalState;
  const DataMenuAnimations = [
    {
      id: 1,
      keyName: 'Animated Core',
      data: [
        {
          id: 1,
          name: 'Animated.timing()',
          component: '',
        },
        {
          id: 2,
          name: 'Animated.decay()',
          component: '',
        },
        {
          id: 3,
          name: 'Animated.spring()',
          component: '',
        },
        {
          id: 4,
          name: 'Animated.Value()',
          component: '',
        },
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
      keyName: 'react-native-animatable',
      data: [
        {
          id: 1,
          name: '',
          component: '',
        },
        {
          id: 2,
          name: '',
          component: '',
        },
        {
          id: 3,
          name: '',
          component: '',
        },
        {
          id: 4,
          name: '',
          component: '',
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
