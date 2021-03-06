import { AppListMenuComponent } from "@element/AppListMenu";
import React from 'react';

const ServerNodeJsScreenMenu = (props) => {
  const {navigation} = props;
  return (
    <AppListMenuComponent MenusAppList={props.MenusAppList} nameScreen = {props.nameScreen} navigation={navigation}>

    </AppListMenuComponent>
  );
}

export default ServerNodeJsScreenMenu;
