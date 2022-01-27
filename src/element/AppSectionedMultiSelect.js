import PropTypes from "prop-types";
import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { AppText } from "./AppText";

const AppSectionedMultiSelect = (props) => {
    const { dataSelect, idSelectedDefault, single, nameDefault, getDataSelect } = props;
    const [selectedItems, setStateSelectedItems] = useState([idSelectedDefault ? idSelectedDefault : 1]);
    const [name, setStateName] = useState(nameDefault);
    
    useEffect(() => {
        setStateName(nameDefault);
        return () => {
        };
    }, [nameDefault]);

    const onSelectedItemsChange = (selectedItemsID) => {
        setStateSelectedItems(selectedItemsID);
    };

    const onSelectedItemObjectsChange = (arrItemSelect) => {
        getDataSelect && getDataSelect(arrItemSelect);
        if (single) {
            setStateName(arrItemSelect[0]?.name);
        }
    }

    return (
        <View style={{ justifyContent: 'center' }}>
            <AppText style={{
                position: 'absolute',
            }}>{name}</AppText>
            <SectionedMultiSelect
                confirmText={"Xác nhận"}
                styles={{ flex: 1, backgroundColor: "blue" }}
                expandDropDowns={true}
                loading={false}
                single={single}
                showCancelButton={true}
                items={dataSelect}
                IconRenderer={Icon}
                uniqueKey="id"
                subKey="children"
                selectText="Choose some things..."
                showDropDowns={true}
                readOnlyHeadings={true}
                onSelectedItemsChange={onSelectedItemsChange}
                onSelectedItemObjectsChange={onSelectedItemObjectsChange}
                selectedItems={selectedItems}
            >
            </SectionedMultiSelect>
        </View >

    );
}

AppSectionedMultiSelect.propTypes = {
    dataSelect: PropTypes.array.isRequired,
    idSelectedDefault: PropTypes.number.isRequired,
    single: PropTypes.bool.isRequired,
    nameDefault: PropTypes.string.isRequired
};

const styles = StyleSheet.create({})

export default AppSectionedMultiSelect;
