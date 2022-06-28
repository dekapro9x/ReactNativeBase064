import { NativeModules, Alert } from 'react-native';
const { PDAModule } = NativeModules;
const testBacodeModuleConnect = () => {
    let checkConnectNative = PDAModule.getString();
    Alert.alert("", checkConnectNative)
    return checkConnectNative;
}
export default PDAModule;
export { testBacodeModuleConnect };
