import { AppContainer } from "@element/AppContainer";
import { AppText } from "@element/AppText";
import { SizeRpScreen } from "@resources/ResponsiveScreen";
import React, { FunctionComponent, useEffect, useState, useRef } from "react";
import { BackHandler, SafeAreaView, StyleSheet, TouchableOpacity, View } from "react-native";

const AnimationsScreen: FunctionComponent = (props: any) => {
  const [showListMenuComponentAnimations, setStateShowListMenuComponent] = useState(false);
  const [listItemAnimationRender, setStateListItemAnimationRender] = useState([]);
  const [renderAnimated, setStateRenderAnimated] = useState(false);
  const [animatedComponent, setStateAnimatedComponent] = useState(null);
  const listItemAnimationRenderLast = useRef([]);

  useEffect(() => {
    const backAction = () => {
      if (renderAnimated && Array.isArray(listItemAnimationRenderLast.current) && listItemAnimationRenderLast.current.length > 0) {
        setStateRenderAnimated(false);
        setStateListItemAnimationRender(listItemAnimationRenderLast.current);
      }
      if (showListMenuComponentAnimations) {
        if (renderAnimated) {
          setStateShowListMenuComponent(true);
        } else {
          setStateShowListMenuComponent(false);
        }
      } else {
        const { navigation } = props;
        navigation.goBack();
      }
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );
    return () => backHandler.remove();
  }, [showListMenuComponentAnimations, renderAnimated]);


  const renderAnimatedComponent = () => {
    if (animatedComponent) {
      return animatedComponent.component;
    } else {
      return null
    }
  }


  const renderContent = () => {
    const { MenuAnimations } = props;
    if (renderAnimated) {
      return (<SafeAreaView style={styles.content}>
        <View style={[{ minHeight: SizeRpScreen.height(100), width: SizeRpScreen.width(100), alignItems: 'center', justifyContent: "center" }]}>
          {renderAnimatedComponent()}
        </View>
      </SafeAreaView>)
    }
    if (showListMenuComponentAnimations) {
      return (
        <SafeAreaView style={styles.content}>
          <View style={[{ minHeight: SizeRpScreen.height(100), width: SizeRpScreen.width(100) }]}>
            {Array.isArray(listItemAnimationRender) && listItemAnimationRender.map((itemRenderAnimated: any, indexRenderAnimated: number) => {
              return (
                <TouchableOpacity
                  key={`${indexRenderAnimated}`}
                  onPress={() => {
                    setStateRenderAnimated(true);
                    setStateAnimatedComponent(itemRenderAnimated);
                  }}
                  style={styles.buttonActionsMenu}>
                  <AppText style={{}}>
                    {itemRenderAnimated.name}
                  </AppText>
                </TouchableOpacity>
              )
            })}
          </View>
        </SafeAreaView>
      )
    }
    return (
      <SafeAreaView style={styles.content}>
        {Array.isArray(MenuAnimations) && MenuAnimations.map((itemMenuAnimated: any, index: number) => {
          return (
            <TouchableOpacity
              key={`${index}`}
              onPress={() => {
                setStateShowListMenuComponent(true);
                setStateListItemAnimationRender(itemMenuAnimated.data);
                listItemAnimationRenderLast.current = itemMenuAnimated.data;
              }}
              style={styles.buttonActionsMenu}>
              <AppText style={{}}>
                {itemMenuAnimated.keyName}
              </AppText>
            </TouchableOpacity>
          )
        })}
      </SafeAreaView>
    );
  }
  return (
    <AppContainer
      useLinearGradient={false}
      nameScreen={"Animations"}
      goBackScreen={false}
      flexWrapHeader
    >
      {renderContent()}
    </AppContainer>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: "center",
    marginHorizontal: 64,
  },
  textPlatForm: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "#433A45",
    paddingLeft: 6,
  },
  viewLogo: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
  viewAppName: {
    justifyContent: "center",
  },
  textAppName: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
  buttonActionsMenu: {
    height: 50,
    width: SizeRpScreen.width(96),
    backgroundColor: "rgb(231,231,231)",
    marginTop: 12,
    justifyContent: "center",
    alignItems: 'center',
    borderRadius: 20,
    alignSelf: 'center',
  }

});

export default AnimationsScreen;
