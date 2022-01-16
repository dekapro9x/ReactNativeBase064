import * as React from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import { PageIndicatorConfig } from './interface';

const BannerDot = (config: PageIndicatorConfig) => {
    const { childrenNum, pageNum, loop, scrollValue } = config;
    if (pageNum === 0) {
        return null;
    }
    const indicators: JSX.Element[] = [];
    for (let i = 0; i < pageNum; i++) {
        indicators.push(<View key={i} style={[styles.pageIndicatorStyle]} />);
    }
    let left: Animated.AnimatedInterpolation;
    if (pageNum === 1) {
        left = scrollValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 0]
        });
    } else if (!loop) {
        left = scrollValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 16]
        });
    } else {
        left = scrollValue.interpolate({
            inputRange: [0, 1, 2, childrenNum - 2, childrenNum - 1],
            outputRange: [0, 0, 16, 16 * (childrenNum - 3), 16 * (childrenNum - 3)]
        });
    }

    return (
        <View style={{ position: 'absolute', alignSelf: 'center', flexDirection: 'row', bottom: 10 }}>
            {indicators}
            <Animated.View
                style={[
                    { left: left }
                ]}
            />
        </View>
    );
};

export default BannerDot;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center'
    },
    pageIndicatorStyle: {
        backgroundColor: "red",
    }
});





