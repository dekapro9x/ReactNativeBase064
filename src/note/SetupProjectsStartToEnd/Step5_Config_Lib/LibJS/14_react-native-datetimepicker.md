# react-native-datetimepicker/datetimepicker
# react-native-modal-datetime-picker
Chức năng: Chọn lịch và thời gian trên hệ điều hành IOS và Android.
Link:
+ https://github.com/mmazzarolo/react-native-modal-datetime-picker
+ https://github.com/react-native-datetimepicker/datetimepicker
# Cài đặt: 
1. Bước 1: yarn add moment
2. Bước 2: yarn add react-native-modal-datetime-picker @react-native-community/datetimepicker
# Sử dụng:
+ Cấu hình trong AppCalendar.js 

# Chú ý:
Phần cấu hình tự động nhận dạng ngôn ngữ IOS:
// Force DatePicker locale to current language (for: 24h or 12h format, full day names etc...)
NSString *currentLanguage = [[NSLocale preferredLanguages] firstObject];
[[UIDatePicker appearance] setLocale:[[NSLocale alloc]initWithLocaleIdentifier:currentLanguage]];