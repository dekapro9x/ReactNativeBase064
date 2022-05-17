import { AppText } from "@element/AppText";
import BottomSheet from "@gorhom/bottom-sheet";
import { SizeRpScreen } from "@resources/ResponsiveScreen";
import React, { useCallback, useMemo, useRef } from 'react';
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
const BottomSheetComponent = () => {
    const bottomSheetRef = useRef<BottomSheet>(null);
    const snapPoints = useMemo(() => ["10%", "25%", "50%"], []);
    const arrayMapItem = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17"]
    const handleSheetChanges = useCallback((index: number) => {
        bottomSheetRef.current?.snapTo(index);
    }, []);

    const renderContent = () => {
        return (
            <View style={{ flex: 1, backgroundColor: "red", alignItems: "center", justifyContent: "center" }}>
                <ScrollView>
                    {arrayMapItem.map((item) => {
                        return <View style={{ height: 85, width: SizeRpScreen.device_width, borderWidth: 1, borderColor: "black" }}>
                            <AppText style={{ fontSize: 25, textAlign: "center" }}>{item}</AppText>
                        </View>
                    })}
                </ScrollView>
            </View>
        );
    };

    return (
        <>
            <View style={{ height: SizeRpScreen.device_height, width: SizeRpScreen.device_width, backgroundColor: "green" }}>
                <ScrollView>
                    {arrayMapItem.map((item) => {
                        return <View style={{ height: 85, width: SizeRpScreen.device_width, borderWidth: 1, borderColor: "black" }}>
                            <AppText style={{ fontSize: 25, textAlign: "center" }}>{item}</AppText>
                        </View>
                    })}
                </ScrollView>
            </View>
            <BottomSheet
                ref={bottomSheetRef}
                index={0}
                snapPoints={snapPoints}
                onChange={handleSheetChanges}
                enablePanDownToClose={true}
            >
                {renderContent()}
            </BottomSheet>
        </>
    )
};
export { BottomSheetComponent };

