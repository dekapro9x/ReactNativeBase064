import React, { FC } from "react";
import { Platform } from "react-native";
import Svg, { ClipPath, Defs, G, Image, Path } from "react-native-svg";

type Props = {
  source: any;
};

export const AvatarHexagonUser: FC<Props> = ({ source }) => {
  return (
    <Svg
      width="100%"
      height="100%"
      viewBox="-22 -8 220 220"
      pointerEvents="none"
    >
      <Defs>
        <ClipPath id="clipPath">
          <Path
            fill="white"
            stroke="gray"
            strokeWidth="3"
            d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"
          />
        </ClipPath>
      </Defs>

      {Platform.OS === "ios" ? (
        <G clipPath="url(#clipPath)">
          <Image
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            href={source}
          />
        </G>
      ) : (
        <React.Fragment>
          <Image
            clipPath="url(#clipPath)"
            width="83%"
            height="83%"
            preserveAspectRatio="xMidYMid slice"
            href={source}
          />
        </React.Fragment>
      )}
    </Svg>
  );
};
