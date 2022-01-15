import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {SIZE, COLOR, isIos} from '../utils';
import {AppIcon} from './AppIcon';
import {AppText} from './AppText';
import moment from 'moment';
import AntDesign from 'react-native-vector-icons/AntDesign';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import DatePicker from 'react-native-datepicker';

export default class AppDateInput extends Component {
  constructor(props) {
    super(props);
    const {value} = this.props;
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
    this.setState({isDatePickerVisible: true});
  };
  
  hideDatePicker = () => {
    this.setState({isDatePickerVisible: false});
  };

  onChangeData = (value) => {
    this.setState({value: valueFormat, isDatePickerVisible: false});
    const {onChangeData, validate, onError} = this.props;
    const valueFormat = moment(new Date(value)).format('YYYY/MM/DD');
    this.setState({value: valueFormat, isDatePickerVisible: false});
    if (onChangeData) {
      onChangeData(valueFormat);
    }
    if (validate) {
      const {status, content} = validate();
      this.setState({status, content});
      if (onError) {
        onError(!status);
      }
    }
  };
  setValue = (value) => {
    this.setState({value});
  };

  showIconDown = () => {
    const {sizeIcon, stylesIcon} = this.props;
    return (
      <View style={{position: 'absolute', right: 10}}>
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
    const {value, isDatePickerVisible} = this.state;
    const dateProp = value ? new Date(value) : new Date();
    const icon = {
      icon: 'caretdown',
      type: 'AntDesign',
      iconColor: COLOR.black,
      iconSize: SIZE.H5,
    };
    return (
      <View
        style={[
          {
            borderRadius: SIZE.border_radius,
            borderColor: COLOR.grey_300,
            borderWidth: StyleSheet.hairlineWidth,
          },
          style,
        ]}>
        {/* placeholder */}
        <AppText
          style={[
            {
              fontSize: SIZE.H5,
              color: value
                ? COLOR.black
                : placeholderTextColor || COLOR.grey_500,
            },
            inputStyle,
          ]}>
          {value
            ? moment(new Date(value)).format('YYYY年MM月DD日')
            : placeholder || '生年月日を入力'}
        </AppText>
        {iconDown ? this.showIconDown() : null}
        {!noIcon && (
          <AppIcon
            style={{
              position: 'absolute',
              top: SIZE.padding / 1.4,
              right: SIZE.padding,
            }}
            {...icon}
          />
        )}
        {isIos ? (
          <DateTimePickerModal
            date={dateProp}
            isVisible={isDatePickerVisible}
            headerTextIOS={'生年月日をご選択'}
            confirmTextIOS={'選択'}
            cancelTextIOS={'キャンセル'}
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
              backgroundColor: COLOR.TRANSPARENT,
            }}
            date={dateProp}
            mode={'date'}
            androidMode={'spinner'}
            maxDate={new Date()}
            format={'YYYY/MM/DD'}
            showIcon={false}
            confirmBtnText="選択"
            cancelBtnText="キャンセル"
            customStyles={{
              btnTextConfirm: {
                color: COLOR.grey_800,
                height: 40,
                lineHeight: 40,
              },
              btnTextCancel: {
                color: COLOR.grey_800,
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
