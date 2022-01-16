import { LoadingAppType } from '@const/TypeLoading';
import { Loading } from '@element/Loading';
import { SizeRpScreen } from '@resources/ResponsiveScreen';
import React, { createRef } from 'react';
import { Transition, Transitioning } from 'react-native-reanimated';
import { useAfterInteractions } from './useAfterInteractions';

export function withInteractionsManaged(Component, Placeholder = null) {
    return (props) => {
        const { transitionRef, interactionsComplete } = useAfterInteractions();
        const viewRef = createRef(transitionRef);
        return (
            <Transitioning.View
                transition={
                    <Transition.Together>
                        <Transition.Change interpolation="easeInOut" />
                        <Transition.In type="fade" />
                    </Transition.Together>
                }
                style={{ flex: 1 }}
                ref={viewRef}>
                {interactionsComplete ? (
                    <Component {...props} />
                ) : Placeholder ? (
                    <Placeholder />
                ) : (
                    <Loading
                        typeLoading={LoadingAppType.Default}
                        style={{ marginTop: SizeRpScreen.margin * 5 }} />
                )}
            </Transitioning.View>
        );
    };
}
