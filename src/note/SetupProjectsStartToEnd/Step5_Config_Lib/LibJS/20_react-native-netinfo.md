# react-native-community/netinfo
Chức năng: React Native Network Info API dành cho Android, iOS, macOS, Windows và Web. Nó cho phép bạn nhận thông tin về:
+ Kiểu kết nối
+ Chất lượng kết nối
Link: https://github.com/react-native-netinfo/react-native-netinfo
# Cài đặt: 
1. Bước 1: yarn add @react-native-community/netinfo
2. Bước 2: Cấu hình trong api.
# Sử dụng:

import NetInfo from "@react-native-community/netinfo";
Subscribe to network state updates:

// Subscribe
const unsubscribe = NetInfo.addEventListener(state => {
  console.log("Connection type", state.type);
  console.log("Is connected?", state.isConnected);
});

// Unsubscribe
unsubscribe();
Get the network state once:

NetInfo.fetch().then(state => {
  console.log("Connection type", state.type);
  console.log("Is connected?", state.isConnected);
});


API
Types:
NetInfoState
NetInfoStateType
NetInfoCellularGeneration
Methods:
fetch()
addEventListener()
useNetInfo()