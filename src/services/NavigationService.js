import { StackActions } from '@react-navigation/native';
import * as React from 'react';

const NavigationService = React.createRef(null);

function navigate(name, params) {
  NavigationService.current?.navigate(name, params);
}

function push(name, params) {
  NavigationService.current?.dispatch(StackActions.push(name, params));
}


export { NavigationService, navigate, push };

