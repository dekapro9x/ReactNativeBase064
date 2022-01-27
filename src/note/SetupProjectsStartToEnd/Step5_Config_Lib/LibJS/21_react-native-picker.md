# react-native-picker/picker
Chức năng: Tạo lựa chọn.
Link: https://github.com/react-native-picker/picker
# Cài đặt: 
1. Bước 1: yarn add @react-native-picker/picker
# Sử dụng:
import {Picker} from '@react-native-picker/picker';
<Picker
  selectedValue={selectedLanguage}
  onValueChange={(itemValue, itemIndex) =>
    setSelectedLanguage(itemValue)
  }>
  <Picker.Item label="Java" value="java" />
  <Picker.Item label="JavaScript" value="js" />
</Picker>