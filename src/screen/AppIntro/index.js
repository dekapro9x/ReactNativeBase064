import React, { useEffect, useLayoutEffect, useState } from "react";
import RNBootSplash from "react-native-bootsplash";
import { AppContainer } from "../../element/AppContainer";
import LoadingProcess from "../../element/LoadingProcess";
import SliderSwiper from "./component/SliderSwiper";

function AppIntro({ navigation, router }) {
  const [loading, setStateLoading] = useState(true);
  useLayoutEffect(() => {
    return () => {};
  }, []);

  useEffect(() => {
    hideSplahScreen();
  }, []);

  const stopLoadingStartAppIntro = () => {
    setStateLoading(false);
  };

  const hideSplahScreen = async () => {
    const init = async () => {};
    init().finally(async () => {
      await RNBootSplash.hide({ fade: true });
    });
  };

  const randomLoadingStartApp = () => {
    const key = Math.floor(Math.random() * 2);
    switch (key) {
      case 0:
        return "Bar";
      case 1:
        return "Pie";
    }
  };

  if (loading) {
    return (
      <LoadingProcess
        typeLoading={randomLoadingStartApp()}
        stopLoadingStartAppIntro={stopLoadingStartAppIntro}
      />
    );
  }

  return (
    <AppContainer
      nameScreen={""}
      goBackScreen={false}
      flexWrapHeader
    >
      <SliderSwiper alwayShowSlider={true}></SliderSwiper>
    </AppContainer>
  );
}
export default React.memo(AppIntro);


