import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
  
  const H1 = wp('100%') * 0.072;
  
  const SizeRpScreen = {
    height: (e, sub = 0) => hp(`${e}%`) - sub,
    width: (e, sub = 0) => wp(`${e}%`) - sub,
    //Full kích thước màn hình:
    device_width: wp('100%'),
    device_height: hp('100%'),
    //Avatar:
    avatar_width: wp('17.6667%'),
    avatar_in_header_width: wp('12.6667%'),
    //Input/Button:
    input_height: 56,
    //Kích thước chữ:
    header_font_size: 17,
    header_tab_font_size: 34,
    sub_text_size: 13,
    title_size: wp('6.9333%'),
    type_font_size: wp('4%'),
    H1,
    H2: H1 - 3,
    H3: H1 - 6,
    H4: H1 - 9,
    H5: H1 * 0.5,
    H6: H1 * 0.4,
    H7: H1 * 0.3,
    H8: H1 * 0.25,
    txt_description: H1 - 15,
    //Icon:
    icon_size: wp('6.4%'),
    icon_header_size: wp('11.7%'),
    icon_size_ionicons: wp('7.4%'),
    iconTabSize_width: 25.6,
    iconTabSize_height: 24,
    icon_button: wp('8.533333%'),
    icon_button_small: wp('3.2%'),
    icon_menu_size: wp('6.8%'),
    fab_bottom: hp('15%'),
    //App styles:
    padding: 16,
    border_radius: 10,
    margin: 16,
  };
  
  export {SizeRpScreen};
  