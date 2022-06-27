import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { AppIcon } from './AppIcon';
import { AppText } from './AppText';
import moment from 'moment';
import AntDesign from 'react-native-vector-icons/AntDesign';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import DatePicker from 'react-native-datepicker';
import { SizeRpScreen } from '@resources/ResponsiveScreen';
import { black, green400, grey400, grey500 } from '@css/Color';
import { isIOS } from '@const/Setting';
import PropTypes from 'prop-types';
export default class AppCalendar extends Component {
  static propTypes = {
    style: PropTypes.object,
  };

  constructor(props) {
    super(props);
    const { value } = this.props;
    let valueText = '';
    let status = true;
    if (props.value) {
      valueText = props.value.toString();
      status = !!value;
    }

    this.state = {
      status,
      content: '',
      value: valueText,
      isDatePickerVisible: false,
    };
  }

  showDatePicker = () => {
    this.setState({ isDatePickerVisible: true });
  };

  hideDatePicker = () => {
    this.setState({ isDatePickerVisible: false });
  };

  onChangeData = (value) => {
    this.setState({ value: valueFormat, isDatePickerVisible: false });
    const { onChangeData, validate, onError } = this.props;
    const valueFormat = moment(new Date(value)).format('YYYY/MM/DD');
    this.setState({ value: valueFormat, isDatePickerVisible: false });
    if (onChangeData) {
      onChangeData(valueFormat);
    }
    if (validate) {
      const { status, content } = validate();
      this.setState({ status, content });
      if (onError) {
        onError(!status);
      }
    }
  };
  setValue = (value) => {
    this.setState({ value });
  };

  showIconDown = () => {
    const { sizeIcon, stylesIcon } = this.props;
    return (
      <View style={{ position: 'absolute', right: 10 }}>
        <AntDesign
          style={[stylesIcon]}
          name="caretdown"
          color="black"
          size={sizeIcon ? sizeIcon : 18}
        />
      </View>
    );
  };
  render() {
    const {
      inputStyle,
      placeholderTextColor,
      placeholder,
      style,
      noIcon,
      iconDown,
    } = this.props;
    const { value, isDatePickerVisible } = this.state;
    const dateProp = value ? new Date(value) : new Date();
    const icon = {
      icon: 'caretdown',
      type: 'AntDesign',
      iconColor: black,
      iconSize: SizeRpScreen.H5,
    };
    return (
      <View
        style={[
          {
            borderRadius: SizeRpScreen.border_radius,
            borderColor: green400,
            borderWidth: StyleSheet.hairlineWidth,
          },
          style,
        ]}>
        <AppText
          style={[
            {
              fontSize: SizeRpScreen.H5,
              color: value
                ? black
                : placeholderTextColor || grey500,
            },
            inputStyle,
          ]}>
          {value
            ? moment(new Date(value)).format('YYYY/MM/DD')
            : placeholder || 'Day'}
        </AppText>
        {iconDown ? this.showIconDown() : null}
        {!noIcon && (
          <AppIcon
            style={{
              position: 'absolute',
              top: SizeRpScreen.padding / 1.4,
              right: SizeRpScreen.padding,
            }}
            {...icon}
          />
        )}
        {isIOS ? (
          <DateTimePickerModal
            date={dateProp}
            isVisible={isDatePickerVisible}
            headerTextIOS={'DateTime'}
            confirmTextIOS={'Xác nhận'}
            cancelTextIOS={'Cancel'}
            mode="date"
            onCancel={this.hideDatePicker}
            onConfirm={this.onChangeData}
            maximumDate={new Date()}
          />
        ) : (
          <DatePicker
            disabled={false}
            style={{
              position: 'absolute',
              width: '100%',
              height: 56,
              backgroundColor: "transparent",
            }}
            date={dateProp}
            mode={'date'}
            androidMode={'spinner'}
            maxDate={new Date()}
            format={'YYYY/MM/DD'}
            showIcon={false}
            confirmBtnText="Xác nhận"
            cancelBtnText="Hủy bỏ"
            customStyles={{
              btnTextConfirm: {
                color: grey400,
                height: 40,
                lineHeight: 40,
              },
              btnTextCancel: {
                color: grey400,
                height: 40,
                lineHeight: 40,
              },
            }}
            hideText
            onDateChange={this.onChangeData}
          />
        )}
      </View>
    );
  }
}
