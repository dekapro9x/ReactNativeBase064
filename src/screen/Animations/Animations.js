import { AppListMenuComponent } from "@element/AppListMenu";
import React from 'react';

const AnimationsMenusScreen = (props) => {
  const { navigation } = props;

  const getNameMenuClick = () => {
    if (props.route.params?.menuClick) {
      const { menuClick } = props.route.params;
      const { title } = menuClick;
      return title
    }
    return null

  }
  return (
    <AppListMenuComponent MenusAppList={props.MenusAppList} nameScreen={getNameMenuClick() || props.nameScreen} navigation={navigation}>

    </AppListMenuComponent>
  );
}

export default AnimationsMenusScreen;
