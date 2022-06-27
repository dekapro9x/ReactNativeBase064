import { white } from '@css/Color';
import { AppText } from '@element/AppText';
import { DebounceButton } from '@element/DebounceButton';
import { SizeRpScreen } from '@resources/ResponsiveScreen';
import React from 'react';
import { StyleSheet } from 'react-native';

const AppDebounceButtonElementReuse = () => {

    const handleOnPress = () => {
        console.log("Press Actions:")
    }

    return (
        <>
            <AppText style={{ fontSize: 12, fontWeight: "bold" }}>[useLoading: false, useDelay:false ]</AppText>
            <DebounceButton
                title="Button Defaults"
                useLoading={false}
                useDelay={false}
                onPress={handleOnPress}
                style={{
                    height: 50,
                    width: SizeRpScreen.width(80),
                    borderRadius: 0,
                    marginLeft: 6,
                    backgroundColor: "#E6331A",
                    borderRadius: 10

                }}
            >
            </DebounceButton>

            <AppText style={{ fontSize: 12, fontWeight: "bold", marginTop: 50 }}>[useLoading: true, useDelay:true, timeDelay:3000  ]</AppText>
            <DebounceButton
                title="Button Debounce"
                useLoading={true}
                useDelay={true}
                timeDelay={3000}
                onPress={handleOnPress}
                style={{
                    height: 50,
                    width: SizeRpScreen.width(80),
                    borderRadius: 0,
                    marginLeft: 6,
                    backgroundColor: "#E6331A",
                    borderRadius: 10

                }}
            >
            </DebounceButton>
        </>
    );
}

const styles = StyleSheet.create({
    styleContainsDefault: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: SizeRpScreen.width(50),
        backgroundColor: white
    }
});


export { AppDebounceButtonElementReuse };

