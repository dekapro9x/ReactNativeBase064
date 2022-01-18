import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screen/Home";
const DrawerStack = createDrawerNavigator();

function RootStackDrawer() {
  return (
    <DrawerStack.Navigator>
      <DrawerStack.Screen name="Feed" component={HomeScreen} />
    </DrawerStack.Navigator>
  );
}

export { RootStackDrawer };
