import { AppListMenuComponent } from "@element/AppListMenu";
import React from 'react';

const BaseScreenMenu = (props) => {
  return (
    <AppListMenuComponent MenusAppList={props.MenusAppList}>

    </AppListMenuComponent>
  );
}

export default BaseScreenMenu;
