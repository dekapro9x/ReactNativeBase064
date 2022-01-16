
import React from "react";
import { ScrollView } from 'react-native';
import { LoadingComponentHOC } from './LoadingComponentHOC';
const ScrollViewWithLoading = LoadingComponentHOC(ScrollView);

export function ScrollViewLoadingContainerHOC({ children, isLoading }) {
    return (
        <ScrollViewWithLoading isLoading={isLoading}>
            {children}
        </ScrollViewWithLoading>
    )
}