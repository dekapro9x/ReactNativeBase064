
import React from "react";
import { View } from 'react-native';
import { LoadingComponentHOC } from './LoadingComponentHOC';
const ViewContainerLoadingHOC = LoadingComponentHOC(View);

export function ViewLoadingContainerHOC({ children, isLoading }) {
    return (
        <ViewContainerLoadingHOC
            isLoading={isLoading}>
            {children}
        </ViewContainerLoadingHOC>
    )
}