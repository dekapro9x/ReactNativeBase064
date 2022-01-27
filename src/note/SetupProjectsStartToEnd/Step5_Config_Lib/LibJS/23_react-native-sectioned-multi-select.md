# react-native-responsive-screen
Chức năng: Tạo popup lựa chọn.
Link: https://github.com/renrizzolo/react-native-sectioned-multi-select
# Cài đặt: 
1. Bước 1: yarn add react-native-sectioned-multi-select
2. Bước 2: Cấu hình trong AppSectionedMultiSelect.js
# Sử dụng:
import React, { Component } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons`
import SectionedMultiSelect from 'react-native-sectioned-multi-select';

const items = [
  // this is the parent or 'item'
  {
    name: 'Fruits',
    id: 0,
    // these are the children or 'sub items'
    children: [
      {
        name: 'Apple',
        id: 10,
      },
      {
        name: 'Strawberry',
        id: 17,
      },
      {
        name: 'Pineapple',
        id: 13,
      },
      {
        name: 'Banana',
        id: 14,
      },
      {
        name: 'Watermelon',
        id: 15,
      },
      {
        name: 'Kiwi fruit',
        id: 16,
      },
    ],
  },
  {
    // next parent item
   ...
  },

];

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedItems: [],
    };
  }
  onSelectedItemsChange = (selectedItems) => {
    this.setState({ selectedItems });
  };

  render() {
    return (
      <View>
        <SectionedMultiSelect
          items={items}
          IconRenderer={Icon}
          uniqueKey="id"
          subKey="children"
          selectText="Choose some things..."
          showDropDowns={true}
          readOnlyHeadings={true}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={this.state.selectedItems}
        />
      </View>
    );
  }
}