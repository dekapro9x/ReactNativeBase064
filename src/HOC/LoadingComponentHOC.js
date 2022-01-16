//https://www.bigbinary.com/blog/higher-order-component-for-rendering-spinner-in-react-native-app
import { Loading } from "@element/Loading";
import React from "react";
const LoadingComponentHOC = (Component) => ({ isLoading, children, ...props }) => {
    if (isLoading) {
        return <Loading></Loading>
    } else {
        return <Component {...props}>{children}</Component>
    }
};
export { LoadingComponentHOC };
