import { AppText } from "@element/AppText";
import BottomSheet from "@gorhom/bottom-sheet";
import React, { useCallback, useMemo, useRef } from 'react';
import { View } from "react-native";
const BottomSheetComponent = () => {
    const bottomSheetRef = useRef<BottomSheet>(null);
    const snapPoints = useMemo(() => ["8%", "25%", "50%"], []);
    
    const handleSheetChanges = useCallback((index: number) => {
        bottomSheetRef.current?.snapTo(index);
    }, []);

    const renderContent = () => {
        return (
            <View style={{ flex: 1, backgroundColor: "red", alignItems: "center", justifyContent: "center" }}>
                <AppText style={{ fontSize: 16, color: "black" }}>Content</AppText>
            </View>
        );
    };

    return <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        enablePanDownToClose={true}
    >
        {renderContent()}
    </BottomSheet>
};
export { BottomSheetComponent };

