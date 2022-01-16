import { Animated } from "react-native";

export interface PageIndicatorConfig {
    pageNum: number;
    childrenNum: number;
    loop: boolean,
    scrollValue: Animated.Value,
}

