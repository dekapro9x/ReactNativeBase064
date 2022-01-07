# react-native-progress
Chức năng: Tạo loading cho ứng dụng.
Link: https://github.com/oblador/react-native-progress
# Cài đặt: 
1. Bước 1: yarn add react-native-progress react-native-svg
2. Bước 2: Cấu hình trong Loading.js
# Sử dụng:

import * as Progress from 'react-native-progress';
<Progress.Bar progress={0.3} width={200} />
<Progress.Pie progress={0.4} size={50} />   
<Progress.Circle size={30} indeterminate={true} />
<Progress.CircleSnail color={['red', 'green', 'blue']} />